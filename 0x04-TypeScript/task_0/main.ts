interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 21,
    location: 'New York',
};

const studentsList: Array<Student> = [student1, student2];

const createTable = () => {
    // create a table 
    const table = document.createElement('table');
    // insert a header row
    const tableHeaderRow = table.insertRow();
    // insert a header row cells
    const tableHeaderRowCell1 = tableHeaderRow.insertCell(0);
    const tableHeaderRowCell2 = tableHeaderRow.insertCell(1);
    // insert tableHeaderRowCell1 text
    tableHeaderRowCell1.innerHTML = '<b>First Name</b>';
    tableHeaderRowCell2.innerHTML = '<b>Location</b>';

    studentsList.forEach((student) => {
    const tableHeaderRow = table.insertRow();
        // insert a header row cells
    const tableHeaderRowCell1 = tableHeaderRow.insertCell(0);
    const tableHeaderRowCell2 = tableHeaderRow.insertCell(1);
    // insert tableHeaderRowCell1 text
    tableHeaderRowCell1.innerHTML = student.firstName;
    tableHeaderRowCell2.innerHTML = student.location;
    document.body.appendChild(table);
})
}
createTable()