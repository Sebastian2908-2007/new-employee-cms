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
           console.table(result);
       });

  }
}

module.exports = Add;