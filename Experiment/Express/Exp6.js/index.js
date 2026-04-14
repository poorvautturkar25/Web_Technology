/* Middleware -is a function that runs before sending a response 
-- it can check data , log info, authenticate user.
*/
const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next) => {     // pass control to the next function without request  will be hang
    console.log('Data response', new Date());
    next();
})

app.get('/', (req,res) =>{
    res.send("Home Page");
})

app.get('/about', (req,res) =>{
    res.send("Welcome to About Page");
})

app.get('/contact', (req,res) =>{
    res.send("This is contact Page");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})