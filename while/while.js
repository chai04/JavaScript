var n,
  i = 1;

n = parseInt(prompt("Enter a number for Multiplication table"));
document.write("Multiplication table of " + n + " is as following" + "<br>");

while (i <= 10) {
  document.write(n * i + "<br>");
  i++;
}
