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
    const sql = `SELECT * FROM roles`;

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