// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
const employee = [];
let i = true;
while(i) {
  const employeeFirst = prompt("Enter First Name");
  const employeeLast = prompt("Enter Last Name");
  let employeeSalary = prompt("Enter employeeSalary");
  if (isNaN(employeeSalary)){
    employeeSalary = 0;
  }
 // Employee Object
  const emp = {
    firstName: employeeFirst,
    lastName: employeeLast,
    employeeSalary: parseFloat(employeeSalary),
  }
  employee.push(emp); 
  console.log(emp);
  i = confirm(`do you want to add another employee?`);
}

return employee;
}

// Display the average employeeSalary
const displayAverageemployeeSalary = function(employeesArray) {
  // TODO: Calculate and display the average employeeSalary
  let sumemployeeSalary = 0;
const numberOfEmployees = employeesArray.length;

for(const emp of employeesArray){
  sumemployeeSalary += emp.employeeSalary
}

// four-loop
const averageemployeeSalary = sumemployeeSalary / numberOfEmployees;
console.log (`the average employeeSalary between out ${numberOfEmployees} employees is $${averageemployeeSalary},`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log (`Congratulations to ${randomIndex.firstName} ${randomIndex.lastName}, our randon drawing winner!`);
}

  /*
  =============================================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const employeeSalaryCell = document.createElement("td");
    // Format the employeeSalary as currency
    employeeSalaryCell.textContent = currentEmployee.employeeSalary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(employeeSalaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageemployeeSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}
// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);