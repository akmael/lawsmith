var express = require('express'),
    server = express();

var port = process.env.PORT || 8080;

server.use (express.static(__dirname+'/public'));

server.get('/', home);


server.listen(port, listenCallback);

function home(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});

}

function listenCallback(){
  console.log('Now listening on port '+port);
}
