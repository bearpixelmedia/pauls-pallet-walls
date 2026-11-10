#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function decodeDir(dir, extensions) {
  if (!fs.existsSync(dir)) return;
  const names = fs.readdirSync(dir);
  const bases = new Set();
  const extPattern = extensions.map((e) => e.replace(".", "\\.")).join("|");
  const re = new RegExp(`^(.*(?:${extPattern}))\\.b64(?:\\.part\\d+)?$`);
  for (const name of names) {
    const m = name.match(re);
    if (m) bases.add(m[1]);
  }
  for (const file of bases) {
    const mono = path.join(dir, file + ".b64");
    let b64 = "";
    if (fs.existsSync(mono)) {
      b64 = fs.readFileSync(mono, "utf8").trim();
    } else {
      const parts = names
        .filter((n) => n.startsWith(file + ".b64.part"))
        .sort();
      b64 = parts
        .map((p) => fs.readFileSync(path.join(dir, p), "utf8").trim())
        .join("");
    }
    if (!b64) continue;
    const buf = Buffer.from(b64, "base64");
    fs.writeFileSync(path.join(dir, file), buf);
    console.log("decoded", path.relative(path.join(__dirname, ".."), path.join(dir, file)), "bytes", buf.length);
  }
}

decodeDir(path.join(__dirname, "..", "public", "images"), [".jpg", ".jpeg", ".png", ".webp"]);
decodeDir(path.join(__dirname, "..", "public", "brand"), [".jpg", ".jpeg", ".png", ".webp"]);
