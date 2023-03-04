const fs = require('fs');
let directory = 'test';
let files = fs.readdirSync(directory);

files.forEach((file) => {
    console.log(file);
});
