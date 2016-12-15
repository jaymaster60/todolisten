var mysql = require("mysql");
var express    = require("express");
var mysql      = require('mysql');
 var path    = require("path");
 var body   = require("body-parser");
 
 var fs = require('fs');

var app = express();
// parse application/x-www-form-urlencoded
app.use(body.urlencoded({ extended: false }))

// parse application/json
app.use(body.json());
// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"test"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
app.post("/", function (req, res){
  //res.send("huut")
  console.log("entering POST");

 var user_email = req.body.users.myEmail;
  var user_password = req.body.users.myPWD;
  console.log(req.body.users.myEmail);
console.log(req.body.users.myPWD);

});
app.get('/dashboard',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard.html'));
});
//var employee = {  email: req.body.myEmail, password: req.body.myPWD };

/*
  console.log("email: "+user_email);
  console.log("password: "+user_password);
  res.send("Your email:" +user_email ); */

 //console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
//var employee = { userID: re, email: 'si@gmail.com', password: "hh" };


//  console.log('Last insert ID:', res.insertId);


/*con.query( 'UPDATE employees SET location = ? Where ID = ?',
  ["Irak", 1],*/
/*con.query( 'INSERT INTO user SET ?', 
function(err,rows){
  if(err) throw err;
   // console.log('Deleted ' +rows.affectedRows + ' rows');
  console.log('Data received from Db:\n');
  console.log("port 3000");
}); */
app.listen(3000);
    //console.log(rows);

 // console.log(rows[2]);
 //console.log('Last insert ID:', res.insertId);
 
 // for (var i = 0; i < rows.length; i++) {
 // console.log(rows[i].location);
//};




/*
con.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ["South Africa", 5],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);
*/