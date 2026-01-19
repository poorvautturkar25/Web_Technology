// 1.Display student information
let studentName = "Poorva";
let studentId = 101;
let studentAge = 20;

document.write("Student Details are : <br>");
document.write("Student Id : ", studentId ,"<br>");
document.write("Student Name : ", studentName ,"<br>");
document.write("Student Age : ", studentAge, "<br>");

//2. Odd Even 
let num = 25;
if(num % 2 == 0)
{
    document.write(num + " is even number","<br>")
}
else
{
    document.write(num + " is odd number","<br>")
}

//3. Display no . by loop 
let i;
for(i = 0 ; i <= 10; i++)
{
    document.write(i,"<br>");
}

//4. Student pass or fail 
let mark = 90;
if(mark >= 40)
{
    document.write("Passed....")
}
else{
    document.write("Failed....")
}