const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
}

const bookList= async function (req,res){
    let sortBooks=await BookModel.find({bookName:,authorName:})
    res.send({msg:sortBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookList= bookList