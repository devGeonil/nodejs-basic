const {odd , even} = require("./var");

console.log("index.js 입니다 \n\n");
console.log(odd, even)
console.dir(global)

console.log(__dirname);
console.log(__filename);
console.log(process)

const path = require('path')
console.log(path.parse(__filename));