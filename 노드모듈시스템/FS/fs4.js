const fs = require('fs');
const zlib = require('zlib');

const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream('./writeme.txt');
const writeStream = fs.createWriteStream('./newWriteme.txt');
readStream.pipe(zlibStream).pipe(writeStream);

// const readStream2 = fs.copyFile('./writeme.txt', './new2Writeme.txt', (e)=>{
//     console.log(e);
// });

readStream.pipe(writeStream);