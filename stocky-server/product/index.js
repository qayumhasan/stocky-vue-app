const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser')
const {registerRoutes } = require('./routes');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

registerRoutes(app);

app.listen(3002,()=>{
    console.log('Start server on port 3002');
})