// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeeArray = []
let employeeAverage = 0

// Collect employee data
const collectEmployees = function() {
  let isMore = true
  while (isMore === true) {
    const firstName = prompt('Enter first name')
    const lastName = prompt('Enter last name')
    let salary = prompt('Enter salary')
    if (isNaN(salary)) {
      salary = 0
    }
    employeeArray.push(
      {
        firstName: firstName,
        lastName: lastName, 
        salary: salary/1
      })
    if (isMore === !confirm('Do you want to add another employee?')) {
      return employeeArray
      isMore = false
    }
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  for (let i = 0; i < employeeArray.length; i++){
    if (isNaN(employeeAverage)) {
      employeeAverage = 0
    }
    employeeAverage = employeeAverage + employeeArray[i].salary
  }
  employeeAverage = employeeAverage/employeeArray.length
  employeeAverage = employeeAverage.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })
  console.log(`The average employee salary between our ${employeeArray.length} employee(s) is ${employeeAverage}`)
}

const randomNum = Math.floor(Math.random() * employeeArray.length)
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomNum = Math.floor(Math.random() * employeeArray.length)
  const randomEmployee = employeeArray[randomNum]
  console.log(`Congratulations to ${employeeArray[randomNum].firstName} ${employeeArray[randomNum].lastName}, our random drawing winner!`)
}

/*
  ====================
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

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

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
