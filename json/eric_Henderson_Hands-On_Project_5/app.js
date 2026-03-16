// Import the file system Node module
const fs = require('fs');

// Read JSON file
const data = fs.readFileSync('data.json');

// Convert JSON to JS object
const students = JSON.parse(data);

// Log this parsed object
console.log("Students List:");
console.log(students);

// Add a new student to the end of this list
students.students.push(
    {
        name: "Alexander",
        age: 32,
        major: "Political Science"
    },
    {
        name: "Mansa",
        age: 57,
        major: "Theology"
    },
    {
        name: "Mohandas",
        age: 78,
        major: "Law"
    }
);

// Convert the updated list back to JSON
const newData = JSON.stringify(students, null, 2); // No replacer, 2-space indentation

// Write updated data to file
fs.writeFileSync('data.json', newData);

// Log the result
console.log("New Student(s) added successfully!");