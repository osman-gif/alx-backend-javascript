
const fs = require('fs');

module.exports = function countStudents(path) {
    try {
        const data = fs.readFile(path, 'utf8');
        const lines = data.split('\n');
        const headers = lines.shift().split(',');
        const students = lines.map((line) => line.split(','));
        const studentsCount = students.length - 1;
        const studentsByField = {};

        // go through each student
        students.forEach((student) => {
            // go through each field in student
            student.forEach((field, index) => {
                // Check if the field is 'field'
                if (headers[index] === 'field') {
                    // Check if there is any student in this field,
                    //if not, then set it to empty list
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    //else, add this student name to the list
                    studentsByField[field].push(student[0]);
                }
            });
        }
        );
        console.log(`Number of students: ${studentsCount}`);
        // Loop through each field
        for (const field in studentsByField) {
            // Check if field exist
            if (field) {
                // If field exists, put all the students in this
                // field in a string and separate them by comma
                const list = studentsByField[field].join(', ');
                console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
            }
        }
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
}