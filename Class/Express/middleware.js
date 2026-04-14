const express = require('express')
const app = express()
const port = 3002

// function checkRoute((req,res,next) => {
//     console.log();
       
// })

app.use((req,res,next) =>{
    console.log("middleware executed", newDate());
    next()
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
1. what is middleware fun?
2. where we use middleware fun in comany level / real time examples.
3. what is types of middleware
4. write 2-3 coding examples of middleware functions.
*/