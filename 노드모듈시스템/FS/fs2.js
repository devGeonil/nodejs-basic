const fs = require('fs');

///16byte
const readStrem = fs.createReadStream('./readme2.txt', {highWaterMark : 16});
const data = [];

readStrem.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStrem.on('end', () => {
    console.log('end', Buffer.concat(data).toString());
});

readStrem.on('error', (err) => {
    console.log('error', error)
});