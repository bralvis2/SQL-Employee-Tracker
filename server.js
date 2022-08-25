const express = require('express');
const inquirer = require('inquirer');
// import and require mysql2 & cTable
const mysql = require('mysql2');
const cTable = require('console.table');


// Express Middleware
const PORT = 3001;
const app = express();

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // mysql username,
  user: 'root',
  // mysql password
  password: 'rootroot',
  database: 'organization_db',
});

// initialize inquirer prompts
const startMenu = () => {
  inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View All Employees By Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
    ]
  })
    .then((answer) => {
      if (answer.choice === "View All Employees") {
        viewAllEmployees();
      }
      if (answer.choice === "View All Employees By Department") {
        employeesByDepartment();
      }
      if (answer.choice === "View All Employees By Manager") {
        employeesByManager();
      }
      if (answer.choice === "Add Employee") {
        addEmployee();
      }
      if (answer.choice === "Remove Employee") {
        removeEmployee();
      }
      if (answer.choice === "Update Employee Role") {
        updateEmployeeRole();
      }
      if (answer.choice === "Update Employee Manager") {
        updateEmployeeManager();
      }
    })
}

// View Employees by Department
function employeesByDepartment() {
  inquirer.prompt({
    type: "list",
    name: "choice",
    message: "Select a department",
    choices: [
      "Sales",
      "Engineering",
      "Finanace",
      "legal",
    ]
  })
    .then((answer) => {
      if (answer.choice === "Sales") {
        salesDept();
      }
      if (answer.choice === "Engineering") {
        engineeringDept();
      }
      if (answer.choice === "Finanace") {
        financeDept();
      }
      if (answer.choice === "legal") {
        legalDept();
      }
    })
}

// View Sales Dept
function salesDept(){
  db.query('SELECT role_id FROM employee', function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
      startMenu();
    }
  })
}

// View Engineering Dept
function engineeringDept(){
  db.query('SELECT role_id FROM employee', function (err, results){
    if (err){
      console.error(err);
    } else {
      console.table(results);
      startMenu();
    }
  })
}

// View Finanace Dept
function financeDept(){
  db.query('SELECT role_id FROM employee', function (err, results){
    if (err){
      console.error(err);
    } else {
      console.table(results);
      startMenu();
    }
  })
}

// View legal Dept
function legalDept(){
  db.query('SELECT role_id FROM employee', function (err, results){
    if (err){
      console.error(err);
    } else {
      console.table(results);
      startMenu();
    }
  })
}

// View  All Employees
function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      console.error(err);
    } else {
      console.table(results);
      startMenu();
    }
  })
}


startMenu();

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
