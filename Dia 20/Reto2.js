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
// let sql = "CREATE TABLE teacher(teacher_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(45), last_name VARCHAR(45))"

// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("tabla creada")
//                 console.log(res)
//         }
// })

// let sql = "CREATE TABLE grupos (grupos_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(45))"

// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("tabla creada")
//                 console.log(res)
//         }
// })
// let sql = "CREATE TABLE subjects(subject_id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(45))"

// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("tabla creada")
//                 console.log(res)
//         }
// })
// let sql = "CREATE TABLE subject_teacher(subject_id INT, teacher_id INT, grupo_id INT)"

// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("tabla creada")
//                 console.log(res)
//         }
// })

// let sql = "CREATE TABLE students(student_id INT, first_name VARCHAR(45),last_name VARCHAR(45), grupo_id INT)"

// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("tabla creada")
//                 console.log(res)
//         }
// })

// let sql = "CREATE TABLE marks(mark_id INT, student_id INT, subject_id INT, date DATE, mark INT)"

// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("tabla creada")
//                 console.log(res)
//         }
// })

// let sql = "INSERT INTO teachers(first_name, last_name) VALUES(\"Poco\", \"Yo\")"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("persona creada")
//                 console.log(res)
//         }
// })
// let sql = "INSERT INTO grupos(name) VALUES(\"presencial\")"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("persona creada")
//                 console.log(res)
//         }
// })


// let sql = "INSERT INTO subjects(title) VALUES(\"programacion\")"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("persona creada")
//                 console.log(res)
//         }
// })

// let sql = "INSERT INTO marks(student_id, subject_id,date, mark) VALUES(1,3,\"2016-04-19\", 1)"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("persona creada")
//                 console.log(res)
//         }
// })

// let sql = "UPDATE marks SET mark=0"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("actualizado")
//                 console.log(res)
//         }
// })
// let sql = "SELECT first_name, last_name FROM students"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("nombres y apellidos")
//                 console.log(res)
//         }
// })
let sql = "SELECT * FROM teachers"
connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("nombres y apellidos")
                console.log(res)
        }
})


