// fs - fileSystem module

// method 1
// const fs = require("fs");
// const first = fs.readFileSync("./content/subfolder/first.txt", "utf8");
// const second = fs.readFileSync("./content/subfolder/second.txt", "utf8");

// method 2
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

writeFileSync(
  "./content/subfolder/result-sync.txt",
  `Here is the result : ${first},${second}`,
  { flag: "a" }
);
