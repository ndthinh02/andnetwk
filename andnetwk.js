var express = require("express");
var app = express.Router();
var fs = require("fs");

app.get('/',function(req,res){
    res.render('index',{title:'Express'})
})
app.listen(3000);

