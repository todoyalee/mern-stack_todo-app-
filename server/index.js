const express = require("express") ;
const mongoose = require("mongoose") ;


const dotenv = require("dotenv").config() ;

const app = express() ;

//use express.json() to get data into json format



app.use(express.json()) ;
//PORT
const PORT= process.env.PORT || 5500 ;
//let's import routes
const todoItemRoute = require('./routes/todoItems') ;

//let's connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', todoItemRoute) ;


// add port and connect to server
app.listen(PORT,()=> console.log("Server Connected")) ;
