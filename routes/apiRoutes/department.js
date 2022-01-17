const express = require('express');
const router = express.Router();
const db = require('../../db/connection')
const Add = require('../../lib/Add')
const Delete = require('../../lib/Delete');

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

// create a department
router.post('/departments',({body},res) => {
    new Add().departments(body.dept_name)
     res.json({
         message:'success',
         data: body
     })
});

// delete an department
router.delete('/departments/:id',(req,res) => {
    new Delete().department(req.params.id)
    res.json({
        message: 'successfull deletion',
        id: req.params.id
    })
});



module.exports = router;