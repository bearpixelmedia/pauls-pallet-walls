#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "public", "images");

// Prefer reassembling chunked .jpg.b64.partNN files; fall back to monolithic .jpg.b64
const names = fs.readdirSync(dir);
const bases = new Set();
for (const name of names) {
  const m = name.match(/^(.*\.jpg)\.b64(?:\.part\d+)?$/);
  if (m) bases.add(m[1]);
}
for (const jpg of bases) {
  const mono = path.join(dir, jpg + ".b64");
  let b64 = "";
  if (fs.existsSync(mono)) {
    b64 = fs.readFileSync(mono, "utf8").trim();
  } else {
    const parts = names
      .filter((n) => n.startsWith(jpg + ".b64.part"))
      .sort();
    b64 = parts.map((p) => fs.readFileSync(path.join(dir, p), "utf8").trim()).join("");
  }
  if (!b64) continue;
  fs.writeFileSync(path.join(dir, jpg), Buffer.from(b64, "base64"));
  console.log("decoded", jpg, "bytes", Buffer.from(b64, "base64").length);
}
