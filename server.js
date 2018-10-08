const express = require('express');
var bodyparser = require("body-parser");
const port = 5200;
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



const auth = require('./Server/Routes/auth')
app.use('/auth',auth);

/*const todo = require('./Server/Routes/todo')
app.use('/todo',todo);*/


app.listen(port, err=>{
    if (err) throw err;
    console.log(`the server is running on port ${port}`)
});
