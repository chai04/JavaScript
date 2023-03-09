//Simple function
/* function add(){
    var a, b;
    a=parseInt(prompt("Enter a number"));
    b=parseInt(prompt("Enter a number"));
    document.write("Addition is: " +(a+b));
}
add(); */

//Function with return
/* function add() {
  var a, b;
  a = parseInt(prompt("Enter a number"));
  b = parseInt(prompt("Enter a number"));
  return a + b;
}
const c = add();
document.write("Addition is: " + c); */

//Function with parameters or arguments
/* function add(a, b) {
  document.write("Addition is: " + (a + b));
}
add(50, 30); */

//Function with parameters and return both
function add(a, b) {
  return a + b;
}
const c = add(30, 25);
document.write("Addition is: " + c);
