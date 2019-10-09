const fs = require('fs');



fs.writeFile('./readme2.txt', '글을 써주세요', (err) => {
    if(err){
        throw err
    }
    console.log('시작')
    fs.readFile('./readme2.txt', (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log('1')
        console.log(data.toString());

        fs.readFile('./readme2.txt', (err, data) => {
            if(err) {
                console.log(err);
            }
            console.log('2')
            console.log(data.toString());

            fs.readFile('./readme2.txt', (err, data) => {
                if(err) {
                    console.log(err);
                }
                console.log('3')
                console.log(data.toString());
                
   
    console.log('끝');

            });
        });

    });
});




