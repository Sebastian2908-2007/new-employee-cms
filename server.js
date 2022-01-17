const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const db = require('./db/connection');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// use the apiRoutes in routes directory
app.use('/api',apiRoutes);


// default response for any request (Not Found)
app.use((req,res) => {
   res.status(404).end();
});


db.connect(err => {
    if(err) throw err;
    console.log('connected to work database successfully');
    app.listen(PORT,() => {
        console.log(`Server running on ${PORT}!`)
    })
  });
