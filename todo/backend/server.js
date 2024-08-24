const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const user = require('./models/usermodel')
const userroutes = require('./routes/userroutes')
const cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const db = process.env.URI

mongoose
  .connect(db)
  .then(() => console.log("Mondodb Connected"))
  .catch(err => console.error(err)
  );

user.syncIndexes()
// ref chatgpt

app.use(userroutes)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})