const express = require ("express");
const app = express();
const cors = require ("cors");

app.use(cors())


app.use(express.urlencoded({extended: false}))
app.use(express.json())

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


//ALUMNOS

app.get("/alumnos", function(request,response){

        let id = request.query.id
        
        if( id == null){
                
                let sql = `SELECT * FROM students`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }

        else {
                let sql = `SELECT student_id, first_name,last_name,grupo_id, ingreso FROM students WHERE student_id = ${id}`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("enseñando un alumno")
                                console.log(res)
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })


        }
        console.log("funcionando")
})

app.post("/alumnos", function(request, response){
        console.log("funciona")

        let respuesta;
        let sql = `INSERT INTO students(first_name, last_name,grupo_id,ingreso ) 
                   VALUES(\"${request.body.first_name}\", \"${request.body.last_name}\", \"${request.body.grupo_id}\", \"${request.body.ingreso}\")`

                connection.query(sql, function(err,res){

                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("persona creada")
                                console.log(res)
                                respuesta = {error: false, codigo: 200, mensaje: "alumno creado", resultado: res}
                                response.send(respuesta)
                        }
                })
                console.log("funcionando")
})

app.put("/alumnos", function(request, response){

        let id = request.body.id
        let first_name = request.body.first_name
        let last_name = request.body.last_name
        let grupo_id = request.body.grupo_id
        let ingreso = request.body.ingreso

        let params = [first_name,
                      last_name, 
                      grupo_id,
                      ingreso]
        
        let sql = `UPDATE students SET first_name = COALESCE(?,first_name), last_name = COALESCE(?,last_name), grupo_id = COALESCE(?,grupo_id) WHERE student_id= ${id}` 
                   
        connection.query(sql, params, function(err,res){

                if(err){
                        console.log(err)
                }
                else{
                        console.log("persona cambiada")
                        console.log(res)
                        respuesta = {error: false, codigo: 200, mensaje: "alumno cambiado", resultado: res}
                        response.send(respuesta)
                }
        })
        console.log("funcionando")
})

app.delete("/alumnos", function(request, response){

        let sql2 = `DELETE FROM students WHERE student_id= ${request.body.id}` 
        connection.query(sql2, function(err,res){

                if(err){
                        console.log(err)
                }
                else{
                        console.log("persona eliminada")
                        console.log(res)
                        respuesta = {error: false, codigo: 200, mensaje: "alumno eliminada", resultado: res}
                        response.send(respuesta)
                }
        })
        console.log("funcionando")
})

//NOTAS
app.get("/notas", function(request,response){

        let id = request.query.id
        
        if( id == null){
                
                let sql = `SELECT * FROM marks`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }

        else {
                let sql = `SELECT * FROM marks WHERE student_id = ${id}`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("enseñando un alumno")
                                console.log(res)
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })


        }
        console.log("funcionando")
})

app.post("/notas", function(request, response){
        console.log("funciona")

        let respuesta;
        let sql = `INSERT INTO marks(student_id, subject_id, date,mark) 
                   VALUES(\"${request.body.student_id}\", \"${request.body.subject_id}\", \"${request.body.date}\", \"${request.body.mark}\")`

                connection.query(sql, function(err,res){

                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("persona creada")
                                console.log(res)
                                respuesta = {error: false, codigo: 200, mensaje: "nota creada", resultado: res}
                                response.send(respuesta)
                        }
                })
                console.log("funcionando")
})
app.put("/notas", function(request, response){
        let fecha =  request.body.date
        let nota =  request.body.mark
        let asignatura = request.body.subject_id
        let id=  request.body.id

        let params = [fecha,
                      nota, 
                      asignatura,
                      id]
        
        let sql = `UPDATE marks SET date = COALESCE(?,date), mark = COALESCE(?,mark), subject_id = COALESCE(?,subject_id), student_id = COALESCE(?,student_id) WHERE student_id= ${id}` 
                   
        connection.query(sql, params, function(err,res){

                if(err){
                        console.log(err)
                }
                else{
                        console.log("persona cambiada")
                        console.log(res)
                        respuesta = {error: false, codigo: 200, mensaje: "nota cambiado", resultado: res}
                        response.send(respuesta)
                }
        })
        console.log("funcionando")
})
app.delete("/notas", function(request, response){

        let sql2 = `DELETE FROM marks WHERE student_id= ${request.body.id}` 
        connection.query(sql2, function(err,res){

                if(err){
                        console.log(err)
                }
                else{
                        console.log("persona eliminada")
                        console.log(res)
                        respuesta = {error: false, codigo: 200, mensaje: "nota eliminada", resultado: res}
                        response.send(respuesta)
                }
        })
        console.log("funcionando")
})

//ADICIONALES
app.get("/media", function(request,response){

        let id = request.query.id
        
        if(!id){
                let respuesta = {mensaje: "pon un id"}
                response.send(respuesta)
        }
        else {
                let sql = `SELECT AVG (mark) AS media FROM marks WHERE student_id = ${id}`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("media de un alumno")
                                console.log(res)
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }
        console.log("funcionando")
})
app.get("/apuntadas", function(request,response){

        let id = request.query.id
        
        if(!id){
                let sql = `SELECT first_name AS nombre, last_name AS apellido,title AS asignatura FROM marks AS m INNER JOIN students ON (m.student_id = students.student_id) INNER JOIN subjects ON(m.subject_id = subjects.subject_id)`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }
        else {
                let sql = `SELECT first_name, last_name,title FROM marks AS m INNER JOIN students ON (m.student_id = students.student_id) INNER JOIN subjects ON(m.subject_id = subjects.subject_id)  WHERE m.student_id = ${id}`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("asignaturas un alumno")
                                console.log(res)
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }
        console.log("funcionando")
})
app.get("/impartidas", function(request,response){

        let id = request.query.id
        
        if(!id){
                let sql = `SELECT first_name AS nombre, last_name AS apellido,title AS asignatura FROM subject_teacher AS st INNER JOIN teachers ON (st.teacher_id = teachers.teacher_id) INNER JOIN subjects ON(st.subject_id = subjects.subject_id)`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }
        else {
                let sql = `SELECT first_name AS nombre, last_name AS apellido,title AS asignatura FROM subject_teacher AS st INNER JOIN teachers ON (st.teacher_id = teachers.teacher_id) INNER JOIN subjects ON(st.subject_id = subjects.subject_id)  WHERE st.teacher_id = ${id}`
        
                connection.query(sql, function(err,res){
        
                        if(err){
                                console.log(err)
                        }
                        else{
                                console.log("asignaturas un profesor")
                                console.log(res)
                                let respuesta = {error: false, codigo: 200, resultado: res}
                                response.send(respuesta)
                        }
                })
        }
        console.log("funcionando")
})
app.listen(5000);