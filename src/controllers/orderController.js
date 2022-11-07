const { count } = require("console")
const productModel= require("../models/productdoc")
const userModel=require("../models/userModel")
const orderModel=require("../models/orderdoc")
const { isValidObjectId } = require("mongoose")



const createProduct=async function (req, res) {
    let {name,category,price}= req.body

    if(!name||!category||!price){
        return res.send("all fields name,category and price are mandatory ")
    }

    let productData= await productModel.create({name,category,price})
    res.send({msg: productData})
}

    
const createUser=async function (req, res) {
    
    if(!name|| !address||!balance||!gender||!age){
        return res.send({msg:"all fields are mandatory"})
    }
   const  userData= await userModel.create({name,address,balance,gender,age,isFreeAppUser})
    return res.send({msg: userData})
}

        
const createOrder=async function (req, res) {
    const {productId,userId}=req.body
    if(!isValidObjectId(userId)){
        return res.send({msg:"productId is not a valid objectId"})
    }

    if(!isValidObjectId(userId)){
        return res.send({msg:"userId is not a valid objectId"})
    }

    const userDetails = await userModel.findById(userId)
    if(!userDetails){
        return res.send({msg:"user is not present"})
}
const productDetails = await productModel.findById(productId)
if(isFreeAppUser){
    const order = wait orderModel.create({
        userId:userId,
        productId:productId,
         amount:0,
         isFreeAppUser:isFreeAppUser,
         date:new Date()
    })

    return res.send({msg:order})
}else{
    if(userDetails.balance< productDetails.price){
        return res.send({msg:"you  have insufficient balance"})
    }
}
      
const orderDetails={
    userId:userId,
    productId:productId,
    amount:productDetails.price,
    isFreeAppUser:isFreeAppUser,
    date:new Date()
}
const order= await orderModel.create(orderDetails)
const user= await orderModel.findByIdAndUpdate(userId,{$inc:{balance: -productDetails.price}})
return res.send({msg:order})
    
}

}



    
module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder