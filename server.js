var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
const port = 3000;
var count = 0;



app.get('/increment', function(req,res){
    count++;
    res.send(`count: ${count}`);
});



app.get('/decrement', function(req,res){
    count--;
    res.send(`count: ${count}`);
});



app.get('/value', function(req,res){
    count;
    res.send(`count: ${count}`);
});


app.get('/reset', function(req, res) {
    counter = 0;
    res.send(`${counter}`);
});

app.listen(port);



