const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/userRoute')
const userModel = require('./models/userModel')
const postRouter = require('./routes/postRoute')
const helmet = require("helmet");
const morgan = require("morgan");

require('dotenv').config()
app = express()

app.use(express.json())
app.use(cors())
app.use(helmet());
app.use(morgan("common"));

port =  process.env.PORT||4000

app.use('/user', userRouter)
app.use('/posts', postRouter)
app.listen(port, (req, res) => {
    console.log(`listening to port ${port}`)
    
})
