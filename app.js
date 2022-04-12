// console.log("helloo");
// todo local module
// ! import local module=>cree par l utilisateurnode
// let calcul= require("./localModule")
// const a=5;
// const b=6;
// console.log(`the sum of ${a} and ${b} is`,calcul.minus(a,b));
// !import core module => installe avec node

// const fs= require("fs")
// step1
// console.log("start......");
// step2
// ?asynchrone
// fs.readFile("./file.txt",(err,data)=>{
//     err?console.log(err):console.log(data.toString());
// })
// ?synchrone
// let data=fs.readFileSync("./file.txt")
// console.log(data.toString());
// step3
// console.log("end.....");
// ! require 3rd party modules 
// const express= require("express")

const http= require("http")
http.createServer((request,response)=>{
    response.end("hello wordl")
}).listen(5000)




