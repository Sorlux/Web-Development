const fs = require('fs');

// Starts up stream with file specified
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}); // ecnoding, encodes the file in the specified format
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// Everytime we get get a chunk of data from the stream we get accesss to the chunk and run the function
readStream.on('data', (chunk) => { //.on is an event listener so this will run once a chunk of data has been read
    console.log('----------New-----------');
    console.log(chunk);
    writeStream.write('-------------New---------------') 
    writeStream.write(chunk) // Will write the chunk 
});


// Literately the same as the code above, but must shorter
// opens readStream and reads, then writes to the writeStream location specified
readStream.pipe(writeStream);
