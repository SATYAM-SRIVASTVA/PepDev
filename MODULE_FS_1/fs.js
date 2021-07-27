// Implementation -> Files and Folders
// directory
// files -> read write update delete

let fs = require("fs");
// let file=fs.readFileSync("f1.txt");
// console.log("File : "+file); // it will give the result after concatination in string
// console.log("File :",file); // it will give buffer form of the file
// fs.writeFileSync("satyam.txt","File created if its not present ");
// update
// fs.appendFileSync("satyam.txt","if file is already there it will be overridden");
// fs.unlinkSync("satyam.txt"); // it will remove the file (satyam.txt)
// console.log("File removed");
// ***************** create/delete directory *********************************** 
// fs.mkdirSync("myDirectory"); // for making a directory in current working folder
// fs.rmdirSync("myDirectory");  for deleting the folder

// *********************path -> does it exist or not****************************
// let doesExists=fs.existsSync("fs.js");
// console.log("This path exists :",doesExists);
// C:\Users\user\Desktop\WebDev\MODULE_FS_1 -> belongs to a directory(folder)
// C:\Users\user\Desktop\WebDev\MODULE_FS_1\fs.js -> belongs to a file
// let statsOfAPath = fs.lstatSync("f1.txt");
// console.log("StatsOfAPath :",statsOfAPath);
// console.log("isDirectory ?",statsOfAPath.isDirectory());
// console.log("isFile ?",statsOfAPath.isFile());
// Folder -> Content
let address="C:\\Users\\user\\Desktop\\WebDev\\MODULE_FS_1";
let content = fs.readdirSync(address);
console.log("Content is :",content);




