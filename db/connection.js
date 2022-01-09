require('dotenv').config();
const mysql2 = require('mysql2');

// mysql2 connection
const db = mysql2.createConnection(
    {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.data
    }
);

db.connect(err => {
  if(err) throw err;
  console.log('connected to work database successfully');
});

module.exports = db;