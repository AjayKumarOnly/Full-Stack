
let name1 = document.getElementById("name");
let roll = document.getElementById("roll");
let email = document.getElementById("email");
let number = document.getElementById("number");
let studentList = document.getElementById("studentList");
let del = document.getElementById("del");

const studentArray = [];

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    stuname: name1.value,
    stuRoll: roll.value,
    stuEmail: email.value,
    stuNumber: number.value
  };

  studentArray.push(student);
  this.reset();
  alert("Student Added Successfully");
});

function getStudent() {
  studentList.innerHTML = "";

  if (studentArray.length === 0) {
    studentList.innerHTML = "<p>No student data available</p>";
    return;
  }

  studentArray.forEach((stu, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>Student ${index }</h3>
      <p><strong>Name:</strong> ${stu.stuname}</p>
      <p><strong>Roll:</strong> ${stu.stuRoll}</p>
      <p><strong>Email:</strong> ${stu.stuEmail}</p>
      <p><strong>Number:</strong> ${stu.stuNumber}</p>
      <hr>
    `;
    studentList.appendChild(div);
  });
}

function deleteStudent() {
  const delIndex = parseInt(document.getElementById("del").value);

  if (delIndex >= 0 && delIndex < studentArray.length) {
    const removed = studentArray.splice(delIndex, 1);
    alert(`Deleted student: ${removed[0].stuname}`);
    getStudent(); 
  } else {
    alert("Error: Student index not found.");
  }

  document.getElementById("del").value = "";
}
  function updateStudent() {
  const index = parseInt(document.getElementById("updateIndex").value);
  const newNumber = document.getElementById("updateNumber").value;

  if ( index >= 0 && index < studentArray.length) {
    studentArray[index].stuNumber = newNumber;
    alert(`Updated number for ${studentArray[index].stuname}`);
    getStudent(); 
  } else {
    alert("Error: Student index not found.");
  }

  document.getElementById("updateIndex").value = "";
  document.getElementById("updateNumber").value = "";
}
