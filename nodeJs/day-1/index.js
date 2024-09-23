const fs = require("fs");
const os = require("os");
const path = require("path");
// console.log(process);

// fs.writeFileSync("read.txt", "Welcome to text file");
// fs.writeFileSync("read.txt", "Hello Techno");

// let data = fs.readFileSync("read.txt");
// console.log(data.toString());
// console.log("Reading file");

// fs.appendFileSync("read.txt", "Welcome to read.txt");

// fs.renameSync("read.txt", "readwrite.txt");

// fs.writeFile("read.txt", "Hellow TR1,Welcome Back !", err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created");
// });
// console.log("after write file sync");

// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
// });

//folder creation
// fs.mkdir("./folder1", err => {
//   console.log("folder created");
// });

// fs.writeFile("./folder1/read.txt", "Hello this is read file", err => {
//   console.log("file created");
// });

// fs.unlink("./folder1/read.txt", err => {
//   console.log("file deleted");
// });

// fs.rmdir("./folder1", err => {
//   console.log("folder deleted");
// });

//os modules

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem() / 1024 / 1024 / 1024);
// console.log(os.totalmem() / 1024 / 1024 / 1024);

// console.log(
//   path.dirname(
//     "C:/Users/Chirag/OneDrive/Desktop/TRANING-FULLSTACK/techno/TR1/Day-23/index.js"
//   )
// );
// console.log(
//   path.extname(
//     "C:/Users/Chirag/OneDrive/Desktop/TRANING-FULLSTACK/techno/TR1/Day-23/index.js"
//   )
// );

const fullPath = path.join("user", "local", "bin", "script");
const absPath = path.resolve("user", "local",'bin','script');
console.log(fullPath);
console.log(absPath);
