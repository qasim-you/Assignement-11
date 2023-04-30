// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function retrieveNamesObject(obj) {
    return Object.values(obj)   
   }
   const person = {
       name : "qasim" ,
       rollNo :121 ,
       gender : "male" ,
   
   }
   values= retrieveNamesObject(person)
   console.log(values);
