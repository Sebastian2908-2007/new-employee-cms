const db = require('../db/connection');
const cTable = require('console.table');

class ViewBy {
  manager(manager_id) {
      const sql = `SELECT * FROM employees WHERE manager_id = ?`;

      db.query(sql,manager_id,(err,rows) => {
          if(err) {
              console.log(err);
              return;
          }
          console.table(rows);
      });
  }
}

module.exports = ViewBy;