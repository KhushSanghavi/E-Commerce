 require('./models/db');
 const express=require('express');
 const path=require('path');
 const exphbs=require('express-handlebars');
 const Handlebars = require('handlebars');
 const mongoose = require('mongoose');
 const bodyparser=require('body-parser');
 const orderController=require('./controllers/orderController');
 const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


 var app=express();
 app.use(bodyparser.urlencoded({
    extended:true
 }));
 app.use(bodyparser.json());

 app.use(express.static(path.join(__dirname,'/public')));

 app.set('views',path.join(__dirname,'views'));

 app.engine('hbs',exphbs.engine({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname+'/views/',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
 }));
 app.set('view engine','hbs');
app.listen(3000,()=>{
    console.log('server on port:3000');
});
app.use('/',orderController);

