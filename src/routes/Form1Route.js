const express=require('express')
const router=express.Router();

const Form1Controller=require('../controllers/Form1Controller')

router.get('/',(req,res)=>{
    res.render('Form1')
})
router.get('/Verify/:email',Form1Controller.verify)



module.exports=router;