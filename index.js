const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About',(req,res)=>{
  res.send("<h1> Welcome to your website </h1>")
})

app.get('/Contact-us',(req,res)=>{
res.send("<p>Contact us at number 92374098 </p>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})