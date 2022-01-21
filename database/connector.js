const mysql = require('mysql');
//dane do mysql server
const conectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lotto',
    multipleStatements: true
};
const connection = mysql.createConnection(conectionOptions);
module.exports = connection;