
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property 

var student = {

    name : "David Rayy",
    
    sclass : "VI",
    
    rollno : 12 };
    console.log("Before student" , student);
    delete student . sclass ;
    console.log("After student" ,student);
