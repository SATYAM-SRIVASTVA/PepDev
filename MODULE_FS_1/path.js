// path -> paths -> platform independent 
let path = require("path");
let fs = require("fs");
// path.basename();
// path.dirname();
// path.extname();

// path.join();  to combine paths of directory and 
// used to making a file inside a given path

//********taking input********************
let inputArr=process.argv.slice(2);
let fileName=inputArr[0];
let content= inputArr[1];
console.log("Filename",fileName);
console.log("Content",content);

// current path of directory
let currentpath=process.cwd();
console.log("currentpath",currentpath);

let filePath=path.join(currentpath,"dir1",fileName);
console.log("FilePath",filePath);
fs.writeFileSync(filePath,content); 
