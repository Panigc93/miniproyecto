let mysql = require ("mysql2")
let connection = mysql.createConnection(
        {
                host: "localhost",
                user: "root",
                password : "Transcom01",
                database : "escuela"
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

// let sql = "DELETE FROM marks WHERE date <= 20111102"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("nombres y apellidos")
//                 console.log(res)
//         }
// })
let sql = "UPDATE marks SET mark=5 WHERE mark < 5"
connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("actualizado")
                console.log(res)
        }
})
