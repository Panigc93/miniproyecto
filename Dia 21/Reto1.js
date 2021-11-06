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
// let sql = "SELECT AVG (mark) FROM marks"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("media hecha")
//                 console.log(res)
//         }
// })
// let sql = "SELECT COUNT (*) FROM students"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("el numero total de alumnos")
//                 console.log(res)
//         }
// })

/*Mostrar campos de columnas*/

// let sql = "SHOW COLUMNS FROM grupos"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("estos son los campos")
//                 console.log(res)
//         }
// })

// let sql = "DESCRIBE grupos"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("estos son los campos")
//                 console.log(res)
//         }
// })

// let sql = "SELECT * FROM COLUMNS WHERE TABLE_NAME = grupos"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("estos son los campos")
//                 console.log(res)
//         }
// })

// let sql = "DELETE FROM marks WHERE mark > 5 AND YEAR(date) = '2020'"
// connection.query(sql, function(err,res){


//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("borrar por año")
//                 console.log(res)
//         }
// })

// let sql = "ALTER TABLE students ADD COLUMN ingreso DATE"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("añadido año")
//                 console.log(res)
//         }
// })

// let sql = "SELECT * FROM students WHERE ingreso = 2021"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("alumnos de este año")
//                 console.log(res)
//         }
// })
// let sql = "SELECT subject_id, COUNT(*) FROM subject_teacher GROUP BY subject_id"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("profes")
//                 console.log(res)
//         }
// })