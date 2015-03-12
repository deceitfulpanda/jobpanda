var app = require('./server/server-config.js');

var port = process.env.PORT || 8000;

app.listen(port);

Console.log('listening on port: ' + port);