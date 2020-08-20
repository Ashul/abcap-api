const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{type:String, trim:true},
    email:{type:String, trim:true, lowercase:true},
    subject: { type: String, trim: true, },
    message: { type: String, trim: true, },
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('Contact', contactSchema)