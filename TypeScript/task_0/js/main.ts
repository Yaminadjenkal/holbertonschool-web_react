// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "London",
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable();

