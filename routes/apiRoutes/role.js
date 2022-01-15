const express = require('express');
const router = express.Router();
const View = require('../../lib/View');
const allRoles = new View().roles();

router.get('/roles',(req,res) => {
    res.json({
        message:'success',
        data: allRoles._rows
    })
});

module.exports = router;