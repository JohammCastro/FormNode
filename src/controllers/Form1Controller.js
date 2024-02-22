const getEmail=require('../services/getEmail')
const main=require('../services/sendEmail')
// const agregarToast=require()
const controller={};





controller.verify=async(req,res)=>{
    // res.send('verify controller')
    let email = req.params.email;
    // console.log(email)
    const query =await getEmail(email)
    // console.log(query)
    res.render('Form1Success',{data:query})
    main(query)
    
    
};

module.exports=controller;