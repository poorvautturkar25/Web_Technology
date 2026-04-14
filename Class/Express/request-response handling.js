// andling request and response :
/* -- express application handles HTTP request and response.
   -- the request object contain info about client request.
   e.g - url, headers, query parameters, request body
*/
const express = require('express')
const app = express()
const port = 3000

app.get('/user',(req,res) => {
    console.log(req.query.name); 
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// localhost:3000/user?name='Poorva'

/*
1. write 2-4 examples of query parameters
2. understand what is query parameters and why we use it in real world examples.
*/

/* Response :
-- it send data back to client.
common respone methods:
1. response.json - send json
2. response.status - sent HTTP status
3. response.sendfile - send files
*/

