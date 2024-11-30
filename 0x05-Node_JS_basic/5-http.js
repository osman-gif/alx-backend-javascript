// In a file named 5-http.js, create a small HTTP server using the http module:

//     It should be assigned to the variable app and this one must be exported
//     HTTP server should listen on port 1245
//     It should return plain text
//     When the URL path is /, it should display Hello Holberton School! in the page body
//     When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
//     CSV file can contain empty lines (at the end) - and they are not a valid student!

// Terminal 1:

// bob@dylan:~$ node 5-http.js database.csv
// ...

// In terminal 2:

// bob@dylan:~$ curl localhost:1245 && echo ""
// Hello Holberton School!
// bob@dylan:~$ 
// bob@dylan:~$ curl localhost:1245/students && echo ""
// This is the list of our students
// Number of students: 10
// Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
// bob@dylan:~$ 

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        countStudents(process.argv[2])
        .then((data) => {
            res.write('This is the list of our students\n');
            res.write(data);
            res.end();
        })
        .catch((error) => {
            res.end(error.message);
        });
    } else {
        res.end();
    }
    }
);

app.listen(1245);
module.exports = app;
