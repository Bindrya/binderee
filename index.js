const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const path = require('path')

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')))

// root route -> home.html руу чиглүүлэх
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

// clean routes
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product.html'))
})

app.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'events.html'))
})

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'faq.html'))
})

// API routes
app.post('/test', (req, res) => {
  console.log(req.body)
  res.json({
    message: 'POST request received',
    data: req.body
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email or password missing'
    })
  }

  res.json({
    message: 'Login successful',
    email
  })
})

// server start
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
