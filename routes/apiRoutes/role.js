const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const Add = require('../../lib/Add');
const allRoles = new View().roles();

// add a role
router.post('/roles',({body},res) => {
    new Add().roles(body.title,body.salary,body.department_id);

    res.json({
        message:'success',
        data: body
    })
});

// get all roles
router.get('/roles',(req,res) => {
    res.json({
        message:'success',
        data: allRoles._rows
    })
});

module.exports = router;