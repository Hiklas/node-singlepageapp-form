var express = require('express');
var app = module.exports = express();

app.get('/status', function(req, res) {
    res.send({"status": "okay"});
});

app.listen(3000);
console.log('Listening on port 3000...');


