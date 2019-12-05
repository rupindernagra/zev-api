const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');  
});

module.exports = connection