let name1 = document.getElementById('name');
let roll = document.getElementById('roll');
let email = document.getElementById('email');
let number = document.getElementById('number');

// // let name1 = "ajay";
// // let roll = 2024503701;
// // let email = 'ajiicodes@gmail.com';
// // let number = 9777777777;

// const studentArray = [
//     {
//         stuname : "ajay",
//         stuRoll : 2024503701,
//         stuEmail : "ajiicodes@gmail.com",
//         stuNumber : 9777777777,
//         dept : 'CT'
//     },
//     {
//          stuname : "kumar",
//         stuRoll : 20245037001,
//         stuEmail : "ajaycodes@gmail.com",
//         stuNumber : 9865321002,
//         dept : "CT"
//     },
//     {
//          stuname : "John",
//         stuRoll : 2020503701,
//         stuEmail : "john@gmail.com",
//         stuNumber : 9794653210,
//         dept : "CT"

//     }
// ];

// // const studentObject = [
// //     {
// //         stuname : name1,
// //         stuRoll : roll,
// //         stuEmail : email,
// //         stuNumber : number
// //     }
// // ];
// // const newArray = [...studentArray, ...studentObject];

// function getStudent(){
//     const allStu = Object.create(studentArray);
//     allStu.forEach(myFunction);
//     console.log(allStu.stuname);


//     function myFunction(item, index,) {
//         console.log("Name : " + item.stuname);
//         console.log("Roll no : "+item.stuRoll);
//         console.log("Email : "+ item.stuEmail);
//         console.log("Number : "+item.stuNumber);
//         console.log("Department : "+item.dept);
// }
//     console.log("hello");
    
// }

// function updateStudent(index,num){
    
// }
const studentArray = [
    { stuname : "ajay", stuRoll : 2024503701, stuEmail : "ajiicodes@gmail.com", stuNumber : 9777777777, dept : 'CT' },
    { stuname : "kumar", stuRoll : 20245037001, stuEmail : "ajaycodes@gmail.com", stuNumber : 9865321002, dept : "CT" },
    { stuname : "John", stuRoll : 2020503701, stuEmail : "john@gmail.com", stuNumber : 9794653210, dept : "CT" }
];


function getStudent() {
    console.log(" Student List ");
    
    studentArray.forEach((item, index) => {
        console.log(`Index: ${index}`);
        console.log(`Name: ${item.stuname}`);
        console.log(`Roll no: ${item.stuRoll}`);
        console.log(`Email: ${item.stuEmail}`);
        console.log(`Number: ${item.stuNumber}`);
        console.log(`Department: ${item.dept}`);
        
    });
}
addStudent("Musk","202154","abc@gmail.com",9632587410,"ct");

function addStudent(stuname, stuRoll, stuEmail, stuNumber, dept) {
  const student = { stuname, stuRoll, stuEmail, stuNumber: String(stuNumber), dept };
  studentArray.push(student);
  console.log(`Added student: ${stuname}`);
}


function updateStudent(index, newNumber) {
    
    if (index >= 0 && index < studentArray.length) {
        studentArray[index].stuNumber = newNumber;
        console.log(`Successfully updated ${studentArray[index].stuname}'s number.`);
    } else {
        console.error("Error: Student index not found.");
    }
}

// updateStudent(1, 8888888888); 
getStudent(); 

deleteStudent(1);
function deleteStudent(index){
    if(index >= 0 && index < studentArray.length){
        studentArray.slice(index,1);
    }else{
        console.error("Error: Student index not found.");
    }
}
deleteStudent(1);
function deleteStudent(index) {
  if (index >= 0 && index < studentArray.length) {
    const [removed] = studentArray.splice(index, 1); 
    console.log(`Deleted student: ${removed.stuname}`);
  } else {
    console.error("Error: Student index not found.");
  }
}