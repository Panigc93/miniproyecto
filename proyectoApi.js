const express = require ("express");
const app = express();
const cors = require ("cors");

app.use(cors())


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/alumnos", function(request,response){

        let id = request.query.id

        if( id == null){
                let respuesta = {error: false, codigo: 200, resultado: alumno}
                response.send(respuesta)
        }
        else {
                let respuesta = {error: false, codigo: 200, resultado: listadealumnos}
                response.send(respuesta)
        }
        console.log("funcionando")
})