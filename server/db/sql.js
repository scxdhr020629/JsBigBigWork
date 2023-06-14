// 导入 mysql 模块
const mysql = require('mysql')

//创建数据库连接对象
//rxl 数据库
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'js2023',
    port: 3306,
})

// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'my_db',
//     port: 3306,
// })


// 向外共享 db 数据库连接对象
module.exports = db