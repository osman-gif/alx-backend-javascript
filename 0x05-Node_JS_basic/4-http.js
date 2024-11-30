// In a file named 4-http.js, create a small HTTP server using the http module:

//     It should be assigned to the variable app and this one must be exported
//     HTTP server should listen on port 1245
//     Displays Hello Holberton School! in the page body for any endpoint as plain text

// In terminal 1:

// bob@dylan:~$ node 4-http.js
// ...

// In terminal 2:

// bob@dylan:~$ curl localhost:1245 && echo ""
// Hello Holberton School!
// bob@dylan:~$ 
// bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
// Hello Holberton School!
// bob@dylan:~$ 
//    Displays Hello Holberton School! in the page body for any endpoint as plain text


const http = require('http');

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
    });

app.listen(1245);
module.exports = app;
