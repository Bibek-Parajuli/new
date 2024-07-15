const express=require("express");
const app=express();
const expressLayouts=require("express-ejs-layouts");
app.set("view engine", 'ejs');
app.set('views', __dirname+ '/views'); 

// setup routes and other paths
const indexRouter=require('./routes/index')
app.set("layout",'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

//connect to mongodb
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const db=mongoose.connection
db.on('error', error=>console.log("error"));
db.once('open', ()=>console.log('connected to mongoose'))



app.use("/", indexRouter);
app.listen(  3000);
