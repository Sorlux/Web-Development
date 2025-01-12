const http = require('http');
const fs = require('fs');


//req : takes request
//res : sends response
const server = http.createServer((req, res) => { //callback function runs everytime a request is sent to the server

    console.log(req.url, req.method); // url gives us the path that a user is on (/about vs /home)


    let path = './views'; //Setting the initial path for the local directories
    
    switch(req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200; // Setting status for the web page (200 = everything is ok)
            break;
        case '/about':
            path+= '/about.html';
            res.statusCode = 200;
            break;

        case '/about-me': // redirection case where this page no longer exists but there are still links to it
            res.statusCode = 301; // 301 means the resource was moved and therefore you will be redirected
            res.setHeader('Location', '/about');  // Difference between this and the rest is that it literately shifts the url back to /about and runs the server function again
            res.end();
            break;
        default:
            path+= '/404.html';
            res.statusCode = 404; // Setting status for the web page (404 = not found)
            break;
    }

    res.setHeader('Content-Ty', 'text/html');  // Sets the header for the message to send
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data); // writes data into what is essentially a buffer that will be sent 
        }
        res.end(); // Sends the response


    })



});

// Runs as long as the server continues to be actively listening for requests
// To see the server type localhost:3000 in web browser
// : means port
server.listen(3000, 'localhost', () => { // function fires when we start listening
    console.log('listening for request on port 3000')
});