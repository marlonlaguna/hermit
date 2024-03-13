// dbConfig.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'base',
  waitForConnections: true,
  port: 3306,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();