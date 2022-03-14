const Cars = require('../Models/Cars');
const router = require('express').Router();

router.route('/').get(async (req, res, next)=>{
    try {

        let GetData= await Cars.find(req.query);
        res.json(GetData);

    } catch (error) {
        next(error);
    }
}).post(async (req, res, next)=>{
    try {

        let AddData = new Cars(req.body);
        let saveData = await AddData.save();
        res.json(saveData);

    } catch (error) {
        next(error);
    }
});


router.route('/:id').put(async (req,res,next) =>{
    try {
        
        let UpdateData = await Cars.findByIdAndUpdate(req.params.id, req.body, {new :true});
        res.json(UpdateData);

    } catch (error) {
        next(error);
    }
}).delete(async (req,res,next) =>{
    try {
        
        let DeleteData = await Cars.findByIdAndDelete(req.params.id);
        res.json(DeleteData);

    } catch (error) {
        next(error);
    }
});


module.exports= router;
