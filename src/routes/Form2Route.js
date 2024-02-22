const express=require('express')
const router=express.Router();
const Form2Controller=require('../controllers/Form2Controller')

router.get('/:email',Form2Controller.deleteUser)

router.get('/Verify/:email',Form2Controller.verify)

module.exports=router;