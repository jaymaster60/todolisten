var express    = require("express");
var mysql      = require('mysql');
 var path    = require("path");
 var body 	= require("body-parser");
 var passwordHash = require('password-hash');


 var  connection = mysql.createConnection({
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
app.use('/static', express.static(path.join(__dirname + '/css')));
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});




app.get("/",function(req,res){
var antwort = "HAllo Ilhan bisch du scho so wit?"
res.sendFile(path.join(__dirname + '/register.html'));
//console.log (req);
console.log("sent file register.html");
});


app.post("/", function (req, res){

	//res.send("huut")
	console.log("entering POST");
	console.log (req.body.myEmail);
	console.log(req.body.myPWD);
	var user_email = req.body.myEmail;
	var user_password = req.body.myPWD;
	console.log("email: "+user_email);
	 var hashedPassword = passwordHash.generate(user_password);
	// console.log(hashedPassword);
	console.log("password: "+hashedPassword);
	
	var myObject = {
		email: user_email, 
		password: hashedPassword
	};



/*
 var hashedPassword = passwordHash.generate('password123');
    console.log(hashedPassword); */

/*
    var hashedPassword = 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97';
    
    console.log(passwordHash.isHashed('password123')); // false
    console.log(passwordHash.isHashed(hashedPassword)); // true
	*/
	var q= "INSERT INTO user (email, password) VALUES ("+user_email+","+user_password+");";
	var m = "SELECT * from user";
	console.log(myObject);
connection.query('INSERT INTO user SET ?', myObject, function(err) {
 	 if (!err)
	    console.log('The solution is: ', myObject);
	  else
	   console.log('Error while performing Query.');
connection.end();
 });
 //	res.end("yes");

});

app.listen(3001);