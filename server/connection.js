const mysql = require('mysql');
require('dotenv').config({ path: `${process.env.HOME}/.dotenv/airfec_reload/.env` });

const mysqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '',
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(mysqlConfig);
connection.connect(console.log('connected to MYSQL'));

const dbManipulator = (sql, callback) => {
  connection.query(sql, (err, data) => (
    err ? callback(err, null) : callback(null, data)
  ));
};

module.exports = { dbManipulator };
