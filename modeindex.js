
// const add = require("./add.js");
// console.log(add(11,22));

// import path from "path";
// const path= require("path");
// console.log("Directory name:",__dirname);
// console.log(path.basename(__dirname+"/f.txt"));
// console.log("full path:",path.resolve(__dirname,"f.txt"));

// const moment= require("moment");
// console.log("Current date and time:",moment().format("DD-MM-YYYY HH:MM:SS"));

// const ls= require("lodash");
// console.log("Capitalized:",ls.capitalize("hello world"));

const fs= require("fs")
// fs.writeFile("best.txt","Hello,MCA -Z2 Class!",(err)=>{
//     if(err)throw err;
//     console.log("file has been saved!");
// });

fs.readFile("best.txt","utf8",(err,data)=>{
    if(err)throw err;
    console.log("File Content:",data);
});