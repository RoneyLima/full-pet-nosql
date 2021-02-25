const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database:'loja-full-pet'
})

module.exports = connection;