var express = require('express');
var app = express();
app.use(express.static( __dirname + '/shinto/dist' ));
var path = require('path');

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./shinto/dist/index.html'));
})

app.listen(8000, function(){
    console.log('Listening on port 8000')
});