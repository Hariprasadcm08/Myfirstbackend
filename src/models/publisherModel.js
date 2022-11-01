const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema( {
    name:String,
    headQuarter: String,
    authorId: {
        type: ObjectId,
        ref: "authorSchema"
    },
    

}, { timestamps: true });

module.exports = mongoose.model('publisher', publisherSchema)
