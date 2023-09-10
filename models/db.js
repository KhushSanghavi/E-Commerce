const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/ecommerceOrders',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('MongoDB connected');
    }
    else{
        console.log('error: '+err);
    }

});
require('./order.model');