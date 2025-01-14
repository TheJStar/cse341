// app
const express = require("express");
const app = express();

// other imports
const routes = require("./routes/index-route");

// Routes
app.use("/", routes);

// app listen
const port = 8080;

app.listen(process.env.PORT || port);
console.log(`listening to port: ${port}`)