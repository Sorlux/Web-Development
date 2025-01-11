// file system module built into node.js

const fs = require('fs');

// asychnornous method which takes some time to do but does not block the code from running
// Once it finishes, it will run the function
// err is any error that occured during the process, and data is the data in the file
// Notice that because the file is being written to asynchornously aswell. It may not print what is in the file because the file is being overwritten
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString()); // Converts the buffer to an actual string
});



// Writing

// Note that is the blo1.txt file does not exist, then it will be created
// If docs doesn't exist then it can't write anything as making directories is not a function it is capable of
fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
    console.log('file was written');
});


 
// Creates and deleting directories
// If assets already exists then it will produce an error
// We use the existsSync function to check whether or not the file already exists
// ! signifies not
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => { // Removes the directory
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}


// Deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => { // unlink is used to delete
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}