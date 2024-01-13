const express = require('express')
const authRoutes=require('./Routes/auth')
const camRoutes = require('./Routes/camRouter')
const adminRoutes = require('./Routes/admin');
const bodyParser = require('body-parser');
const app= express();
const knex = require('knex')(require('./Configuration/DBConfig')['development']);
const PORT = 3008;
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use('/',authRoutes);
app.use('/camera',camRoutes);
app.use('/admin',adminRoutes);

app.listen(PORT,'0.0.0.0',()=>{
    console.log("Listening to 3008");
});