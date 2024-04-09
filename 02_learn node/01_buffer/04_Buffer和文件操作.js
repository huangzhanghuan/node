const fs = require('fs');

fs.readFile("./foo.txt", (err, data) => {
    console.log(data);
});

fs.readFile("./foo.txt", { encoding: 'utf-8' }, (err, data) => {
    console.log(data);
});