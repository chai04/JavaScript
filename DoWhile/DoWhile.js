var a, b, ch;
a = parseInt(prompt("Enter a number"));
b = parseInt(prompt("Enter a number"));
do{
    alert("1:Addition\n2:Subtraction\n3:Multiplication\n4:Division");
ch = parseInt(prompt("Enter your choice"));

switch (ch) {
  case 1:
    alert("Addition is: " + (a + b));
    break;
  case 2:
    alert("Subtraction is: " + (a - b));
    break;
  case 3:
    alert("Multiplication is: " + a * b);
    break;
  case 4:
    alert("Division is: " + (a - b));
    break;
}
}while(ch<=4)
