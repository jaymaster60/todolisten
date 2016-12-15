// Load the http module to create an http server.
var http = require('http');
var passwordHash = require('password-hash');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});
    var hashedPassword = passwordHash.generate('password123');
    console.log(hashedPassword);
  response.write("hahah I know your password");
  response.write(hashedPassword);
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


/*





    var hashedPassword = 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97';
    
    console.log(passwordHash.isHashed('12356789')); // false
    console.log(passwordHash.isHashed(hashedPassword)); // true


    */