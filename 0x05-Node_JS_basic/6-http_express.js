// nstall Express and in a file named 6-http_express.js, create a small HTTP server using Express module:

//     It should be assigned to the variable app and this one must be exported
//     HTTP server should listen on port 1245
//     Displays Hello Holberton School! in the page body for the endpoint /

// In terminal 1:

// bob@dylan:~$ node 6-http_express.js
// ...

// In terminal 2:

// bob@dylan:~$ curl localhost:1245 && echo ""
// Hello Holberton School!
// bob@dylan:~$ 
// bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Error</title>
// </head>
// <body>
// <pre>Cannot GET /lskdlskd</pre>
// </body>
// </html> 
// bob@dylan:~$ 

const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
}
);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

module.exports = app;