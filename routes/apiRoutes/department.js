const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const Add = require('../../lib/Add')
const allDept = new View().departments();


router.post('/departments',({body},res) => {
    new Add().departments(body.dept_name)
     res.json({
         message:'success',
         data: body
     })
});

// get departments
router.get('/departments',(req,res) => {
   
    res.json({
        message:'success',
        data: allDept._rows
    })
  
})

module.exports = router;