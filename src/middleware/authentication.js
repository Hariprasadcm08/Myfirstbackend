const jsonwt = require("jsonwebtoken");
const verifytoken= req.header["x-auth-token"]
try{
    if(!header){
        res.send({
            status:false,
            msg:"token is not available",
        })
    }else {
        let verifyingToken= jwt.verify(header,"token verified")
        if(!verifyingToken){
            res.send({status:false,msg:"not a valid token"})
        }else{
            next()
        }
        }catch(error){
            res.status(500).send({msg:"connect proccess"})
    }
}
module.exports.verifytoken= verifytoken
