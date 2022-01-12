const db = require('../db/connection');
require('console.table');

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
    const sql = `SELECT * FROM employees`;

    db.query(sql,(err,rows) => {
        if(err){ console.log(err);
            return;
       }
       console.table(rows);
    });
  }
};

module.exports = View;