// 9. Write a JavaScript program to calculate the area and perimeter of a circle.

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// Area of circle.......>
function calculateArea(radis) {
    let pi = 3.1415 ;
    let area = pi * radis * radis
    return area ;
}
let radis = 5 ;
let area = calculateArea(radis) ;
 console.log("The area of the circle is " + area.toFixed(2));
// Perimeter of circle......>
function calculatePerimeter(radius) {
    let pi = 3.1415 ;
    let perimeter = 2*pi * radius 
    return perimeter ;
}
let radius = 5 ;
let perimeter = calculatePerimeter(radius) ;
console.log("The perimeter of the circle is " + perimeter.toFixed(2));

