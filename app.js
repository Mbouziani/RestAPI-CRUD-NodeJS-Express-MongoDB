const express =  require('express');
const mongoose = require('mongoose');
const StudentRouter = require('./Routes/Student');
const CarsRouter =require('./Routes/Cars');

const app = express();
const port = '5000';


const url ='mongodb+srv://MohammedBouzaini:mohammed1234@cluster0.yktd7.mongodb.net/DemoProject?retryWrites=true&w=majority';
mongoose.connect(url ,{ useNewUrlParser: true }).then(()=>{console.log('Connecting !!');}).catch((err)=>{console.log('error in conecting to db' +err);});

app.listen(port, () => {
    console.log('Server is listning now on the port '+port);
});




// json middleware
app.use(express.json());

// routing 
app.use('/Student' , StudentRouter);
app.use('/Cars',CarsRouter);


// catch Error 404

app.use((req, res, next)=>{
    let err = new Error('Somthing Wrong !! please check your endPoint');
    err.status=404;
    next(err);

})