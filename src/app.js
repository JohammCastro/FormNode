const express = require('express');
const path=require('path');
require ('dotenv').config();

//importing routes
const Form1Routes= require('./routes/Form1Route')
const Form2Routes= require('./routes/Form2Route')



const app = express();

// const port=process.env.PORT || 3000;

// settings
app.set('port',process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//middlewares


//routes
app.use('/Form1',Form1Routes)
app.use('/Form2',Form2Routes)

//static files
app.use(express.static('public'))


//starting server
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})

