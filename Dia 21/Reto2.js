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

// let sql = "SELECT student_id,mark FROM marks WHERE (student_id BETWEEN '1' AND '3') OR (mark > 8 AND YEAR(date) = '2020')"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("notas de los alumnos")
//                 console.log(res)
//         }
// })

// let sql = "SELECT subject_id, AVG (mark) AS media FROM marks GROUP BY subject_id"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("media hecha")
//                 console.log(res)
//         }
// })


let sql = "SELECT student_id, AVG (mark) FROM marks WHERE YEAR (date) = 2020 GROUP BY student_id"
connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("media hecha")
                console.log(res)
        }
})

