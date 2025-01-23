const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index");
const professionalRoutes = require('./routes/professional');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app.use("/", router);

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);


// app listen
mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
});