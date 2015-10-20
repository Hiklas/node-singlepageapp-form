var express = require('express');
var app = module.exports = express();

app.get('/status', function(req, res) {
    res.send({"status": "okay"});
});

// Magic to serve static files
//app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000...');


