const employee = [
  {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    age: 33,
  },
  {
    firstName: "Chaitanya",
    lastName: "Waghmare",
    id: 5567,
    age: 30,
  },
  {
    firstName: "Chithan",
    lastName: "Wunt",
    id: 5568,
    age: 26,
  },
];

for (let i = 0; i <= employee.length; i++) {
  document.write(
    "First name: " + employee[i].firstName,
    " Lastname: " + employee[i].lastName,
    " Age: " + employee[i].age + "<br>"
  );
}
