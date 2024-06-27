// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let addMore = true;

  while (addMore) {
    //variables created to recive the client's input in prompt questions.
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salaryString = prompt("Enter  employee's salary:");
    const salary = parseFloat(salaryString);
    //used to turn salary string to decimal

    // check if user input is valid before adding data.
    // if statment only runs if all statements are truthy
    // not sure if !isNan is correct, because it creates a double negative

    if (firstName && lastName && !isNaN(salary)) {
      employees.push({ firstName, lastName, salary });
    } else {
      alert("Invalid input. Please try again.");
      continue;
    }

    // Ask user if they want to add more employees
    addMore = confirm("Would you like to add another employee?");
  }

  return employees;
  // TODO: Get user input to create and return an array of employee objects
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log(
    "Average Salary: ",
    averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "AUD",
    })
  );
};
// Select a random employee
//Math functionality used with amount of variables -> returned into randomEmployee as employeeArray parameter
const getRandomEmployee = function (employeesArray) {
  const randomArr = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomArr];
  console.log("Random Employee: ", randomEmployee);
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
