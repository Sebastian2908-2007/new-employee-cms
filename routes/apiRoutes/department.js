const express = require('express');
const router = express.Router();
const db = require('../../db/connection')
const Add = require('../../lib/Add')


// create a department
router.post('/departments',({body},res) => {
    new Add().departments(body.dept_name)
     res.json({
         message:'success',
         data: body
     })
});

// get departments
router.get('/departments',(req,res) => {
   
    const sql = `SELECT * FROM departments`;

    const result = db.query(sql,(err,rows) => {
        if(err) {  console.log(err);
        return;
        }
        res.json({
            message:'success',
            data: rows
        })
    }); 
    
  
})

module.exports = router;