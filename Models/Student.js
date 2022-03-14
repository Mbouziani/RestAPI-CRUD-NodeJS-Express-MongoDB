var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    FullName :{
        type : String,
        require :true,
    },
    Age :{
        type : String,
        require :true,
    },
    Picture :{
        type : String,
        default : 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg'
    },
    StarsCount : {
        type: Number,
        default:0
    }
},{timestamps :true});


module.exports = mongoose.model('Student' , StudentSchema);

