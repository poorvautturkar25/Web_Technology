let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(){
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || marks === ""){
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        marks: Number(marks)
    };
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents(data = students){
    let list  = document.getElementById("studentList");
    list.innerHTML = "";

    data.forEach((s,index) => {
        let result = s.marks >= 40 ? "Pass" : "Fail";

        list.innerHTML += `
        <tr>
        <td>${s.name}</td>
        <td>${s.marks}</td>
        <td>${result}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>
        `
        ;
    });
    calculateSummary();
}

function deleteStudent(){
    let search = document.getElementById("search").value.toLowerCase();

    let filtered =students.filter(s => s.name.toLowerCase().includes(search));

    displayStudents(filtered);
}

function calculateSummary(){
    let total = students.reduce((sum,s) => sum + s.marks, 0);
    let avg = students.length ? (total/students.length).toFixed(2) : 0;

    document.getElementById("summary").innerText = `Total Marks: ${total} | Average: ${avg}`;
}

displayStudents();