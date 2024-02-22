const deleteUser=require('../services/deleteUser')
const main=require('../services/sendEmail')
// const agregarToast=require()`
const controller={};





controller.deleteUser=async(req,res)=>{
    console.log('deleteUser')
    let email = req.params.email;
    
    res.render('Form2',{data:email})
    
};


controller.verify=async(req,res)=>{
    // console.log('deleteUser verify')
    let email = req.params.email;
    // console.log(email)
    deleteUser(email)
    res.render('Form2Success')
    
};

module.exports=controller;