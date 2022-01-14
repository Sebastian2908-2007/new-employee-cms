const db = require('../db/connection');
const cTable = require('console.table');


class View {
   
departments() {
    const sql = `SELECT * FROM departments`;

    db.query(sql,(err,rows) => {
        if(err) {  console.log(err);
        return;
        }
        console.table(rows);
    });  
}
roles() {
    // the first  line selects all roles the part after the comma sets the field departments.dept_name
    // as Department in our table
    // the three lines after AS Department join the roles table on roles.department_id if it is equal to departments.id
    const sql = `SELECT roles.*,departments.dept_name
    AS Department
    FROM roles 
    LEFT JOIN departments
    ON roles.department_id = departments.id`;

    db.query(sql,(err,rows) => {
        if(err) { console.log(err)
            return;
        }
        console.table(rows);
    });
}
employees() {
    // the first two lines of the sql query select all employees as well as selecting
    //roles title and roles salary and giving them both new aliases.
    // the third line splits the same employees table into a an employee aliased m which will be the manager
    // we set m.first name to have manager_first_name as column name the same concept is applied for m.last_name
    // the next two lines join the employee table with the roles table where employee.role_id is equal to the roles.id
    // the next line joins our m employees table with the employees table were employees.manager_id equals an m.employee_id or  (m.id)
    // the last line just orders the table data by the employye ids
    const sql = `SELECT employees.*,roles.title
    AS Job_title, roles.salary AS Employee_Salary,
    m.first_name AS Manager_First_Name,  m.last_name AS Manager_Last_Name
    FROM employees
    JOIN roles ON employees.role_id = roles.id
    LEFT JOIN employees m ON employees.manager_id = m.id
    ORDER BY employees.id`;

    db.query(sql,(err,rows) => {
        if(err){ console.log(err);
            return;
       }
       console.table(rows);
    });
  }
};

module.exports = View;