const bookModel = require("../models/bookModel")
//const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
//     res.send({msg: allBooks})
// }

const createBook = async function(req,res){
    let data=req.body
    let savedData=await bookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req,res){
    let sortBooks=await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:sortBooks})
}
const getBookByYear = async function(req,res){
    let year=req.query.year
let bookByYear =  await bookModel.find({year:year})
res.send({msg:bookByYear})
}

const getParticularBook =async function(req,res){
    let parData=req.body
    let gpBook=await bookModel.find({$in:["authorName"=="parData"]})
    res.send({msg:gpBook})
}
const getInrBooks = async function(req, res) {
    let rsBooks= await bookModel.find({$or:[{"bookSchema.totalPages":"100","bookSchema.totalPages":"200","bookSchema.totalPages":"500"}]})
    res.send({msg:rsBooks})
}
const getRandomBooks =async function(req,res){
   let rnBooks=await bookModel.find({$or:[{"totalPages":{$gt:500}}]})
   res.send({msg:rnBooks})
}
    



//module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.bookList= bookList
module.exports.getBookByYear= getBookByYear
module.exports. getParticularBook= getParticularBook
module.exports. getInrBooks= getInrBooks
module.exports. getRandomBooks = getRandomBooks
module.exports. createBook  = createBook 