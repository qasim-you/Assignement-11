// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function objectToKeyValuePair(obj) {
    return Object.entries(obj)
}
const person={
    name : "qasim",
    rollNo : 121 ,
    gender: "male" ,


}

values =  objectToKeyValuePair(person)
console.log(values);
