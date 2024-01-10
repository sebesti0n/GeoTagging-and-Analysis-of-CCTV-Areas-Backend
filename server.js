const express = require('express')
const authRoutes=require('./Routes/auth')
const app= express();
const knex = require('knex')(require('./Configuration/knexfile')['development']);
const PORT = 3008;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',authRoutes);

app.listen(PORT,'0.0.0.0',()=>{
    console.log("Listening to 300");
});