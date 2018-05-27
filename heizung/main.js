var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "IoD",
  password: "637013"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
