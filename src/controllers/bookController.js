const { count } = require("console")
const aBook = require("../models/bookModel")
const bookModel= require("../models/bookModel")

const createAuthor= async function(req,res){
    let gAuthor=req.body
    let cAuthor=await bookModel.create(gAuthor)
    res.send({msg:cAuthor})
}
const createBook= async function(req,res){
    let gBook=req.body
    let cBook=await bookModel.create(gBook)
    res.send({msg:cBook})
}

const list0fBooks=async function(req,res){
let author = await authorSchema.findOne({authorName:"chethan bhagath"})
   let bookList =await bookSchema.find({authorId:author.authorId}) 
   res.send({msg:bookList})
}

const fAndUpdate=async function(req,res){
    let bDetails= await bookModel.findOneAndUpdate({name:"two states"},{$set:{price:100}},{new:true})
    let authorId= bookDetails.author_id
    let author = await authorSchema.findOne({author_id:authorId})
    res.send({msg:author})
}

const replaceItWithAuthor= async function (req,res){
    let nPrice=book.price
    let ele1=await bookModel.find({nprice:{$gte:50,$lte:100}})
    //let id = ele1.authorId
    return res.send({msg:author.authorName})

}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.list0fBooks=list0fBooks
module.exports.fAndUpdate=fAndUpdate
module.exports.replaceItWithAuthor=replaceItWithAuthor
























// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



