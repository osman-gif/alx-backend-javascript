const fs = require('fs').promises;

module.exports = async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8'); // Asynchronously read the file
        const lines = data.trim().split('\n'); // Split by new lines
        const headers = lines.shift().split(','); // Extract headers
        const students = lines.map((line) => line.split(',')); // Parse student data

        const studentsCount = students.length;
        const studentsByField = {};

        // Iterate over each student
        students.forEach((student) => {
            const name = student[0]; // Assuming first column is the student name
            const fieldIndex = headers.indexOf('field'); // Find the index for 'field'

            if (fieldIndex !== -1) {
                const field = student[fieldIndex]; // Get the student's field
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(name);
            }
        });

        console.log(`Number of students: ${studentsCount}`);
        for (const field in studentsByField) {
            if (studentsByField[field]) {
                const list = studentsByField[field].join(', ');
                console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};
