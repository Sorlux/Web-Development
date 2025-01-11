const http = require('http');


//req : takes request
//res : sends response
const server = http.createServer((req, res) => { //callback function runs everytime a request is sent to the server

    console.log('request made');
});


server.listen(3000, 'localhost', () => { // function fires when we start listening
    console.log('listening for request on port 3000')
});