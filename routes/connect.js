var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dashboard"
});

con.connect(function(err) {
  if (err) throw err;
	console.log("Conexão com o Banco De Dados: OK!");
});

con.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('O resultado de 1 + 1 é', rows[0].solution);
});
  
  var sql = "SELECT * FROM `produtos` WHERE 1";
  con.query(sql, function (err, result, fields) {
	if (err) throw err;
    var produtos = result;
    console.log (produtos[0]);
  }); 

con.end();