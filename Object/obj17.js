// 17. Write a JavaScript function to check whether an object contains given property.


function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  const person = { name: "qasim", gender : "male" };
  console.log(hasProperty(person, 'name')); 
  console.log(hasProperty(person, 'gender')); 