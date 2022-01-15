const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const db = require('./db/connection');
const View = require('./lib/View');
const allDept =  new View().departments();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/api/departments',(req,res) => {
    
    res.json({
        message:'success',
        data: allDept._rows
    })
  
})

// default response for any request (Not Found)
app.use((req,res) => {
   res.status(404).end();
});

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}!`)
})