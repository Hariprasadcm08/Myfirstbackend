const mongoose = require('mongoose');

const author = new mongoose.Schema( {
   authorId: {type:Number,required:true},
   authorName:String,
   age:Number,
   address:String
},{timestamps: true});

   const bookSchema = new mongoose.Schema( {
   name:String,
    authorId:Number,
    price:Number,
    ratings: Number
}, {timestamps : true});

const fauthor = mongoose.model('author',authorSchema) 
module.exports=fauthor
const aBook= mongoose.model('Abook',bookSchema)
module.exports=aBook

    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    //summary :  mongoose.Schema.Types.Mixed,
    //isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")