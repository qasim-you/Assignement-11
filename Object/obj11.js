//11. Write a JavaScript function to print all the methods in an JavaScript object.


function getAllMethods(obj) {
    const properties = Object.getOwnPropertyNames(obj);
    return properties.filter(function(properties) {
      return typeof obj[properties] === 'function';
    });
  }
  
  console.log(getAllMethods(Array))
