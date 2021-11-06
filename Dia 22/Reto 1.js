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

// let sql = "SELECT first_name, last_name, title FROM students INNER JOIN marks ON (students.student_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subect_id)"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("notas de los alumnos")
//                 console.log(res)
//         }
// })
// let sql = "SELECT first_name, last_name, title FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id)  INNER JOIN subjects ON ( subject_teacher.subject_id = subjects.subject_id)"
// connection.query(sql, function(err,res){

//         if(err){
//                 console.log(err)
//         }
//         else{
//                 console.log("notas de los alumnos")
//                 console.log(res)
//         }
// })


let sql = "SELECT title,first_name, last_name, COUNT(student_id) FROM marks AS m INNER JOIN subjects ON (m.subject_id = subjects.subject_id) INNER JOIN subject_teacher ON ( subjects.subject_id = subject_teacher.subject_id) INNER JOIN teachers ON ( subject_teacher.teacher_id = teachers.teacher_id) GROUP BY m.subject_id"
connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("notas de los alumnos")
                console.log(res)
        }
})
