const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const allDept = new View().departments();


router.get('/departments',(req,res) => {
   
    res.json({
        message:'success',
        data: allDept._rows
    })
  
})

module.exports = router;