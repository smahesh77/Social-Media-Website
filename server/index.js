const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/userRoute')
const userModel = require('./models/userModel')
require('dotenv').config()
app = express()
app.use(express.json())
app.use(cors())

port =  process.env.PORT||4000

app.use('/user', userRouter)
app.listen(port, (req, res) => {
    console.log(`listening to port ${port}`);
    
})
