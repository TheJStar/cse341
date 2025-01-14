// app
const express = require('express');
const app = express()

// other imports


// Routes
app.get("/", (req, res)=>{res.send("Hello World")})

// app listen
const port = 8080

app.listen(process.env.PORT || port)