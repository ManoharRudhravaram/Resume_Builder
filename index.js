let dbConnection=require('./config/db')
let dotenv=require('dotenv')
let express=require('express')
let cors=require("cors");
const {authRoute} = require('./Route/authRoute')
let app=express()
let PORT=process.env.PORT || 8000
app.use(cors());
app.use(express.json())
//middlware configration
dotenv.config({})
dbConnection()
//for setting form data into req
app.use(express.urlencoded({extended:true}))
//route
//middlware for error handling
app.use((err,req,res,next)=>{
    if(err)
        {
            res.status(err.status || 401);
            res.send({
              status: err.status || 401,
              message: err.message,
            });
        }
        else
        {
            next()
        }
})
app.use('/auth/v1',authRoute)

app.listen(PORT,()=>{
    console.log(`backend is connected : http://127.0.0.1:${PORT}`)
})
