const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const Add = require('../../lib/Add');
const allEmployees = new View().employees();

// add an employee
router.post('/employees',({body},res) => {
    new Add().employees(body.first_name,body.last_name,body.role_id,body.manager_id);
    res.json({
        message:'success',
        data: body
    })
});

// get all employees
router.get('/employees',(req,res) => {
    res.json({
        message:'success',
        data: allEmployees._rows
    })
});

module.exports = router;