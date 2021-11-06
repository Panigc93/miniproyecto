let mysql = require ("mysql2")
let connection = mysql.createConnection(
        {
                host: "localhost",
                user: "root",
                password : "Transcom01",
                database : "codenotch"
        }
)

connection.connect(function(error){
        if (error){
                console.log(error)
        }
        else{
                console.log ("conecta2")
        }
})

// let sql = "ALTER TABLE profesores ADD COLUMN mote VARCHAR(45)"
// connection.query(sql, function(err, result){
//         if(err) throw err;
//         console.log("tabla modificada")
// })

// let sql = "ALTER TABLE profesores DROP COLUMN mote"
// connection.query(sql, function(err, result){
//         if(err) throw err;
//         console.log("tabla modificada")
// })

let sql = "DROP TABLE profesores"
connection.query(sql, function(err, result){
        if(err) throw err;
        console.log("tabla eliminada")
})
