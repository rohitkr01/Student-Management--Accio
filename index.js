
// Initialize an empty array to store student data
let students = [];

// Function to add a student
function addStudent() {
    // Get the input field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gpa = document.getElementById("gpa").value;
    const age = document.getElementById("age").value;
    const degree = document.getElementById("degree").value;

    // Create a new student object
    const student = { name, email , gpa , age, degree };

    // Add the student to the array
    students.push(student);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("age").value = "";
    document.getElementById("degree").value = "";

    // Display the updated student list
    displayStudents();
}

// ---------------------------
function displayStudents() {
    // Get the table element
    const tableBody = document.getElementById("table_body");

    // Clear the existing list
    tableBody.innerHTML = "";

    // Loop through the students array and create list items
    students.forEach((student, index) => {
    const table_row = document.createElement("tr");

    table_row.innerHTML = `
        <td class="std_id" > ${index +1 }</td>
        <td class="std_name">${student.name}</td>
        <td class="std_email">${student.email}</td>
        <td class="std_age">${student.age}</td>
        <td class="std_gpa">${student.gpa}</td>
        <td class="std_degree">
        ${student.degree}
        <span class="crud_container">
                <img src="./assets/edit.png" alt="" onclick="editStudent(${index})">

                <img src="./assets/trash.png" alt=""  onclick="deleteStudent(${index})">
            </span>
        </td>
    `;

    tableBody.appendChild(table_row);
    });
}
// ---------------

// Function to edit a student
function editStudent(index) {
    // Get the student object at the specified index
    const student = students[index];

    // Set the form fields with student data for editing
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("gpa").value = student.gpa;
    document.getElementById("age").value = student.age;
    document.getElementById("degree").value = student.degree;

    // Remove the student from the array
    students.splice(index, 1);

    // Display the updated student list
    displayStudents();
}

// Function to delete a student
function deleteStudent(index) {
    // Remove the student from the array
    students.splice(index, 1);

    // Display the updated student list
    displayStudents();
}
// -----------------------------------
// Function to search students
function searchStudents() {
    // Get the search query
    const query = document.getElementById("search_student").value.toLowerCase();

    // Filter the students based on the search query
    const filteredStudents = students.filter(student => {
    const name = student.name.toLowerCase();
    const email = student.email.toLowerCase();
    const degree = student.degree.toLowerCase();
    return name.includes(query) || email.includes(query) || degree.includes(query);
    });

    // Display the filtered student list
    displayFilteredStudents(filteredStudents);
}


// function to display the filtered student data
function displayFilteredStudents(filteredStudents) {
    // Get the table element
    const tableBody = document.getElementById("table_body");

    // Clear the existing list
    tableBody.innerHTML = "";

    // Loop through the students array and create list items
    filteredStudents.forEach((student, index) => {
    const table_row = document.createElement("tr");

    table_row.innerHTML = `
        <td class="std_id" > ${index +1 }</td>
        <td class="std_name">${student.name}</td>
        <td class="std_email">${student.email}</td>
        <td class="std_age">${student.age}</td>
        <td class="std_gpa">${student.gpa}</td>
        <td class="std_degree">
        ${student.degree}
        <span class="crud_container">
                <img src="./assets/edit.png" alt="" onclick="editStudent(${index})">

                <img src="./assets/trash.png" alt=""  onclick="deleteStudent(${index})">
            </span>
        </td>
    `;

    tableBody.appendChild(table_row);
    });
}