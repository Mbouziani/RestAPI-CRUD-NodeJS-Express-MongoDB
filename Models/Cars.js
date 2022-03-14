const mongoose =  require('mongoose');

const CarSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    modele :{
        type : String,
        required : true,
    },
    matricule :{
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true,
       
    },
    isSolde : {
        type : Boolean,
        default: false,}

},{timestamps:true});


module.exports = mongoose.model('Cars' , CarSchema);



// "name":"Mercedes",
// "modele":"Amg 63 Coupe",
// "matricule":"Fr-857-XHR",
// "price":"56.000",
// "isSolde":true




