const express = require('express');
const router = express.Router();
const db = require('../../db/connection')
const Add = require('../../lib/Add');
const Update = require('../../lib/Update');
const Delete = require('../../lib/Delete');


// get all roles
router.get('/roles',(req,res) => {

    const sql = `SELECT roles.*,departments.dept_name
    AS Department
    FROM roles 
    LEFT JOIN departments
    ON roles.department_id = departments.id`;

    const result = db.query(sql,(err,rows) => {
        if(err) { console.log(err)
            return;
        }
        res.json({
            message:'success',
            data: rows
        })
    });
    
});

// add a role
router.post('/roles',({body},res) => {
    new Add().roles(body.title,body.salary,body.department_id);

    res.json({
        message:'success',
        data: body
    })
});

router.delete('/roles/:id',(req,res) => {
   new Delete().role(req.params.id);

   res.json({
       message: 'successfull deletion',
       id: req.params.id
   })
});


router.put('/roles/:id',(req,res) => {
   new Update().roleSalary(req.body.salary,req.params.id);
   res.json({
       message: 'success',
       data: req.body
   })
});

module.exports = router;