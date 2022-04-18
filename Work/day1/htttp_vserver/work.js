var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	let url = req.url;
	fs.readFile('flag.jpg' + url, function (err,data) {
	  if (err) {
		res.writeHead(404);
		// res.end(JSON.stringify(err));
		res.end("There is no tiger image!");
		return;
	  }
	  res.writeHead(200);
	  res.end(data);
	});
  }).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
