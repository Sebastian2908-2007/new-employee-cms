const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const allEmployees = new View().employees();

router.get('/employees',(req,res) => {
    res.json({
        message:'success',
        data: allEmployees._rows
    })
});

module.exports = router;