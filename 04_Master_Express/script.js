import express from 'express'

const app = express()

app.use(function(req,res,next){
    console.log('middle ware');
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/madhav', (req,res)=>{
    res.send("madhav gonna win this time ")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})