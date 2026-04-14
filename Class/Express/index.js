const express = require('express')
const app = express()
const port = 3000

// Middleware
// function checkRoute(req,res,next) => {
//   console.log(req.url);
  
// }
// app.use(checkRoute());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/about', (req, res) => {
//   res.send('Welcome to about page!')
// })

// app.get('/project', (req, res) => {
//   res.send('Welcome to project page')
// })

// app.get('/contact', (req, res) => {
//   res.send('These are my contacts')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


