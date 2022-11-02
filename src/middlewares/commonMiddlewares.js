const request=require( 'request-ip')


const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const middleware=async function(req,res,next){
    console.log("this is my first middleware ")
    const date=new Date();
    console.log(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"    "
    + date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds())

console.log(request.getClientIp(req)) //to get used IP address

console.log(req.route.path)// to get the route path which is being requested
    next()
}

module.exports.middleware=middleware
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
