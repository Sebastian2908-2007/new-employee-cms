const db = require('../db/connection');
const cTable = require('console.table');


// class for making updates to the sql database
class Update {
empRole(new_role_id,emp_id) {
    const sql = `UPDATE employees SET role_id = ?
    WHERE id = ?`;
    const params = [new_role_id,emp_id];

      db.query(sql,params,(err,result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result.affectedRows);
        return result.affectedRows;
    });
   
 }
 empManager(new_manager_id,emp_id) {
     const sql = `UPDATE employees SET manager_id = ?
     WHERE id = ?`;
     const params = [new_manager_id,emp_id];

     db.query(sql,params,(err,result) => {
         if(err) {
             console.log(err);
             return;
         }
         console.log(result.affectedRows);
         return result.affectedRows;
     });
 }
 roleSalary(new_salary,role_id) {
     const sql = `UPDATE roles SET salary = ?
     WHERE id = ?`;
     const params = [new_salary,role_id];
     db.query(sql,params,(err,result) => {
         if(err) {
             console.log(err);
             return;
         }
     });
 }
}

module.exports = Update;