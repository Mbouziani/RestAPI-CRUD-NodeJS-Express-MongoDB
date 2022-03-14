const router = require('express').Router();
const Student = require('../Models/Student');

router.get('/',async (req, res ,next) =>{
    try {
        let StdData = await Student.find(req.query);
        res.json(StdData);

        
    } catch (error) {
        next(error);
    }
})


router.post('/' , async (req, res ,next) =>{
    try {
        if(req.body.Age == null){
            let err = new Error('The Age must be not empty');
            err.status = 500;
            throw err;
        }
        let AddedData =  new Student(req.body);
        let SavedData = await AddedData.save();

        res.json(SavedData);



    } catch (error) {
        next(error);
    }
})

router.put('/:id' ,async(req, res, next) =>{
    try {
        if(req.body.Age != null){
            let err = new Error('The Age must be not empty');
            err.status = 500;
            throw err;
        }
        let UpdatedData = await Student.findByIdAndUpdate(
            req.params.id, req.body ,{new:true},
        );
        res.json(UpdatedData);
        

    } catch (error) {
        next(error)
    }
})


router.delete('/:id' , async (req, res , next) => {
    try {
        let deletedData = await Student.findByIdAndDelete(
            req.params.id,);
            res.json(deletedData);


    } catch (error) {
        next(error);
    }
})





module.exports=router;