const {ObjectId}=require("mongoose");
const mongoose = require('mongoose');
const orderSchema=new mongoose.Schema({
     userId:{type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
    },
    productId:{type:mongoose.Schema.Types.ObjectId,
                 ref:"Product",
                 required:true,
                 },
  amount:{
           type:Number,
           required:true
  },
  isFreeAppUser:{ 
                   type: Boolean,
                   default:false
  },
  date:Date                    
},{ timestamps: true });

module.exports = mongoose.model('order', orderSchema)