import fs from "fs";

function loadUsers() {
  try {
    if (!fs.existsSync("user.json")) {
      return [];
    }

    const data = fs.readFileSync("user.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log("файл user.json повреждён");
    fs.writeFileSync("user.json", "[]");
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
}

const args = Object.fromEntries(
  process.argv.slice(2).map(a => a.replace("--", "").split("="))
);

const name = args.name;
const email = args.email;
let id = args.id;


if (!name) {
  console.error("поле --name обязательно");
  process.exit(1);
}

const users = loadUsers();

console.log("\n--- BEFORE ---");
console.log(users);

if (email && users.some(u => u.email === email)) {
  console.error("email уже существует");
  process.exit(1);
}

if (!id || users.some(u => u.id === id)) {
  id = Date.now().toString();
}

const newUser = {
  id,
  name,
  email,
  createdAt: new Date().toISOString()
};

users.push(newUser);
saveUsers(users);

console.log("\nпользователь добавлен:");
console.log(newUser);

console.log("\n--- AFTER ---");
console.log(users);
