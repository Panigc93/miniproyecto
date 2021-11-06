let mysql = require ("mysql2")
let connection = mysql.createConnection(
        {
                host: "localhost",
                user: "root",
                password : "Transcom01",
                database : "museo"
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
let sql = "CREATE TABLE duenio(duenio_id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(45), apellido VARCHAR(45),mail VARCHAR(45), direccion VARCHAR(45))"

connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})
sql = "CREATE TABLE autor(autor_id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(45), apellido VARCHAR(45),telefono INT)"

connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})
sql = "CREATE TABLE coleccion(col_id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(45), tipo ENUM('permanente','itinerante','almacenada'))"

connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})
sql = "CREATE TABLE estado(estado_id INT AUTO_INCREMENT PRIMARY KEY, descripcion ENUM('posesion','prestado','pedido'), inicio DATE, fin DATE)"

connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})
sql = "CREATE TABLE piezas(pieza_id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(45), descripcion VARCHAR(45), anio DATE, ubicacion VARCHAR (45), autor_id INT, duenio_id INT, col_id INT, estado_id INT)"

connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})



let sql = "SELECT p.nombre AS nombre_pieza, estado.fin, d.nombre AS duenio_nombre, estado.descripcion AS descripcion, d.apellido, d.mail FROM piezas AS p INNER JOIN estado ON (p.estado_id = estado.estado_id) INNER JOIN duenio AS d ON (p.duenio_id = d.duenio_id) WHERE estado.descripcion = 'pedido'"

connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})

let sql = "SELECT ubicacion, COUNT(nombre) FROM piezas GROUP BY ubicacion ORDER BY COUNT(nombre) DESC"
connection.query(sql, function(err,res){

        if(err){
                console.log(err)
        }
        else{
                console.log("tabla creada")
                console.log(res)
        }
})
