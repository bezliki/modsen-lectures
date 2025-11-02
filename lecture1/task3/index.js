import { writeFileSync, readFileSync, appendFileSync } from "fs";

const content = `	Привет из Node.js!
Время создания: ${new Date()}
Версия Node.js: ${process.version}
`;

writeFileSync("info.txt", content);
console.log("Файл info.txt создан");

const data = readFileSync("info.txt", "utf8");
console.log("Содержимое файла:");
console.log(data);

const additionalInfo = "\n\nДополнительная информация:";
appendFileSync("info.txt", additionalInfo);
console.log("Информация добавлена в файл");

const updatedData = readFileSync("info.txt", "utf8");
console.log("Обновленное содержимое файла:");
console.log(updatedData);

const reversed = updatedData.split("").reverse().join("");
console.log("Содержимое файла задом наперёд: ");
console.log(reversed);
