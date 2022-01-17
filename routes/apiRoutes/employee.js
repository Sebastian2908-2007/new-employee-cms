const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const Add = require('../../lib/Add');
const Update = require('../../lib/Update');
const db = require('../../db/connection')
//const allEmployees = new View().employees();



// get all employees
router.get('/employees',  (req,res) => {
    const sql = `SELECT employees.*,roles.title
    AS Job_title, roles.salary AS Employee_Salary,
    m.first_name AS Manager_First_Name,  m.last_name AS Manager_Last_Name
    FROM employees
    JOIN roles ON employees.role_id = roles.id
    LEFT JOIN employees m ON employees.manager_id = m.id
    ORDER BY employees.id`;

    const result = db.query(sql,(err,rows) => {
        if(err){ console.log(err);
            return;
       }

       res.json({
        message:'success',
        data: rows
    })
    });
    
     /*res.json({
        message:'success',
        data: allEmployees._rows
    })*/

})


// add an employee
router.post('/employees',({body},res) => {
    new Add().employees(body.first_name,body.last_name,body.role_id,body.manager_id);
    res.json({
        message:'success',
        data: body
    })
});



// update an employees role
router.put('/employees/:id',(req,res) => {
  new Update().empRole(req.body.role_id,req.params.id);

    res.json({
        message:'success',
        data: req.body,
    })
});

// update an employees manager
router.put('/employees/managerUpdate/:id',(req,res) => {
    new Update().empManager(req.body.manager_id,req.params.id);

    res.json({
        message:'success',
        data: req.body
    })
});


module.exports = router;