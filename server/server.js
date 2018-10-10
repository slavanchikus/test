const express = require('express');
const bodyParser = require('body-parser');

const connectRoutes = require('./routes/index');

const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || port, () => {
  console.log(`We are live on ${port}`);
  connectRoutes(app);
});
