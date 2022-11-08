const jwt =require("jsonwebtoken")

    const auth= function logmethod(req,res,next){
        token = req.headers["x-auth-token"]
        if(!token)
        return res.send({
            status:false,
            msg:"token is not available"
        })
    let decodedToken= jwt.verify(token,"hariprasad");
    if(!decodedToken)
    return res.send({status:false,msg:"token is invalid"});
     

    let userToBeModified=req.params.userId
    let userLoggedIn = decodedToken.userId
    if(userToBeModified!=userLoggedIn)
    return res.send({status:false,msg:"token doesnt match"})

    next()
}
module.exports.auth=auth

    //}


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }