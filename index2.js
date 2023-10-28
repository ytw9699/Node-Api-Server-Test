const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
app.use(cors())//모든 요청 일단 허용

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Hello World! test')
})

app.get('/dog', (req, res) => {
  res.send('<h2>dog</h2>')
})

app.get('/cat', (req, res) => {
  res.send({'sound' : '야옹1'})
})

app.get('/cat2', (req, res) => {
  res.json({'sound' : '야옹2'})
})

app.get('/user/:id', (req, res) => {
  const q = req.params
  res.send({'sound' : q.id})
})

app.get('/user5/:id', (req, res) => {
  const {id} = req.params
  res.send({'sound' : id})
})

app.get('/sound/:name', (req, res) => {
  const {name} = req.params
  res.send({'sound' : name})
})


app.get('/user/:id', (req, res) => {
  const q = req.params
  res.send({'sound' : q.id})
})

app.get('/user2/:id', (req, res) => {
  const q = req.query
  res.send({'sound' : q.name})
})


app.post('/user3/:id', (req, res) => {
  const body = req.body
  console.log(body);
  res.send({'sound' : q.name})
})



app.get('/settime', (req, res) => {
  setTimeout( () => {  res.send('5초지남') },5000 );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})