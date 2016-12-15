var express    = require("express");
var mysql      = require('mysql');
 var path    = require("path");
 var body 	= require("body-parser");
 
 var fs = require('fs');




 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
var app = express();
// parse application/x-www-form-urlencoded
app.use(body.urlencoded({ extended: false }))

// parse application/json
app.use(body.json());
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});
//express.static(__dirname + '/css');



app.get("/",function(req,res){
var antwort = "HAllo Ilhan bisch du scho so wit?"
res.sendFile(path.join(__dirname + '/register.html'));
//console.log (req);
console.log("sent file register.html");
});
/*
app.post("/", function (req, res){
	//res.send("huut")
	console.log("entering POST");
	console.log (req.body.myEmail);
	console.log(req.body.myPWD);
	var user_email = req.body.myEmail;
	var user_password = req.body.myPWD;
app.get('/dashboard',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard.html'));
});
	console.log("email: "+user_email);
	console.log("password: "+user_password);
	res.send("Your email:" +user_email );
	
	var q= 'select * from user';
	
	/*
	
connection.query(q, function(err, rows, fields) {
connection.end();
 if (!err)
    console.log('The solution is: ', rows);
  else
   console.log('Error while performing Query.');
 });


*/


app.listen(3000);

 