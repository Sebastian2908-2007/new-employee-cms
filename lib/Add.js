const db = require('../db/connection');
require('console.table');

// class for adding to db 
class Add {
  departments(dept_name) {
      const sql =`INSERT INTO departments(dept_name)
      VALUES(?)`
      db.query(sql,dept_name,(err,result) => {
           if(err) {
               console.log(err);
               return;
           }
           
       });
       

  }
  roles(title,salary,dept_id) {
      const sql = `INSERT INTO roles(title,salary,department_id)
      VALUES(?,?,?)`;
      const params = [title,salary,dept_id];

      db.query(sql,params,(err,result) => {
          if(err) {
              console.log(err);
              return;
          }   
      });
  }
  employees(first_name,last_name,role_id,manager_id) {
      const sql = `INSERT INTO employees(first_name,last_name,role_id,manager_id)
      VALUES(?,?,?,?)`;
      const params = [first_name,last_name,role_id,manager_id];

      db.query(sql,params,(err,result) => {
          if(err) {
              console.log(err);
              return;
          }
         
      });
  }
}

module.exports = Add;