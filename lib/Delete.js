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
}

module.exports = Delete;