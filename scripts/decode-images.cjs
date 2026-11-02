#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "public", "images");
for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith(".jpg.b64")) continue;
  const jpg = name.slice(0, -4); // remove .b64
  const b64 = fs.readFileSync(path.join(dir, name), "utf8").trim();
  fs.writeFileSync(path.join(dir, jpg), Buffer.from(b64, "base64"));
  console.log("decoded", jpg);
}
