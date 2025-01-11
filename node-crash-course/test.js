// Something to note is that it seems that everything is being ran at the same time, setTimout is not ran before the directory and file names

// Part of the global object
// Passing in a function and the time, so after 3 seconds it wil do the function

setTimeout(() => {
    console.log(`in the timeout`);
    clearInterval(inInterval)
    }, 3000);

// Every second it will run the function
const inInterval= setInterval(() => {console.log(`In the interval`)}, 1000);

// Gives the asbolute path to the current directory or the file 
console.log(__dirname);
console.log(__filename);



