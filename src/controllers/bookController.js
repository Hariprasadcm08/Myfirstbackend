const { create } = require("underscore")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
  let authorId=req.body.author_id
  if(!authorId){
    res.send({msg:"authorId is required"})
  }else
      if(authorId===0){
        res.send({msg:"authorId is not present"})
      }
  let pubId=req.body.publisher_id
  if(!pubId){
    res.send({msg:"publisherId is required "})
  }else
      if(pubId===0){
        res.send({msg:"publisherId is not present"})
      }
      let create=await create(book)
      res.send({msg:create})
    }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate("publisher_id")
    res.send({data: specificBook})

}

const updatePrice = async function(req,res){
    let inc=await authorModel.find({rating:{$gt:3.5}})
    let newArr=[]
    for(i=0;i<inc.length;i++){
        collect=i._id
        let send=await bookModel.findOneAndUpdate(
            {author_id:collect},
            {$inc:{"price":10}},
            {new:true}
        )
        newArr.push(send)
    }
    res.send({MSG:newArr})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatePrice = updatePrice
