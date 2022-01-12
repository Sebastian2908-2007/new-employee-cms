const db = require('../db/connection');
const cTable = require('console.table');

class Delete {
  role(role_id) {
      const sql = `DELETE FROM roles WHERE id = ?`
      db.query(sql,role_id,(err,result) => {
          if(err) {
              console.log(err);
              return;
          }
          console.table(result);
      });
  }
  department(dept_id) {
      const sql = `DELETE FROM departments WHERE id = ?`;

      db.query(sql,dept_id,(err,result) => {
          if(err) {
              console.log(err);
              return;
          }
          console.table(result);
      });
  }
  employee(emp_id) {
      const sql = `DELETE FROM employees WHERE id = ?`;

      db.query(sql,emp_id,(err,result) => {
          if(err) {
              console.log(err);
              return;
          }
          console.table(result);
      });
  }
}

module.exports = Delete;