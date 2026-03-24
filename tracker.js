const students = [
  {name: "Alice", grade: 85},
  {name: "Brian", grade: 72},
  {name: "Cathy", grade: 90},
  {name: "David", grade: 60},
  {name: "Eva", grade: 78},
];

// 1. Show all students
const allDiv = document.getElementById("all");
allDiv.innerHTML = "<h2>All Students</h2>";

students.forEach(student => {
  allDiv.innerHTML += `${student.name} : ${student.grade}<br>`;
});

// 2. Filter passed students
const passedDiv = document.getElementById("passed");
const passed = students.filter(student => student.grade >= 70);

passedDiv.innerHTML = "<h2>Passed Students</h2>";

passed.forEach(student => {
  passedDiv.innerHTML += `${student.name} : ${student.grade}<br>`;
});

// 3. Calculate average
const avgDiv = document.getElementById("average");

const total = students.reduce((sum, student) => sum + student.grade, 0);
const average = total / students.length;

avgDiv.innerHTML = `<h2>Average Grade</h2>${average.toFixed(2)}`;

// 4. Sort students
const sorted = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted:", sorted);
