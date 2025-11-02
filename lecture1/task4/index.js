import { writeFileSync } from "fs";

const content = `	Привет из Node.js!
Время создания: ${new Date()}
Версия Node.js: ${process.version}
`;

writeFileSync("info2.txt", content);
console.log("Файл info.txt создан");

const evenChars = fs
  .readFileSync("info.txt", "utf8")
  .split("")
  .filter((_, i) => i % 2 === 1)
  .join("");

console.log(evenChars);
