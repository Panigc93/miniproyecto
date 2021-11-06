class Profesional
{
        constructor(nombre, apellido){
                this.nombre = nombre;
                this.apellido = apellido;
        }

}

function postProfesional(){
        let name=  document.getElementById("nombre").value
        let apellido =  document.getElementById("apellidos").value

        let profesional = new Profesional(name,apellido);

        const url = 'http://localhost:4000/profesionales';

        console.log(profesional)

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(profesional),
                method: "POST"
        }

        fetch(url,param)
        .then(function(data){

                return data.json()
        })
        .then(function(result){
                console.log(result)
        })
        .catch(function(error){
                console.log(error)
        })
}

function getProfesional(){
        let id = document.getElementById('id').value
        let url = 'http://localhost:4000/profesionales';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                method: "GET"
        }
        if(id){
                url += "?id=" + id
                fetch(url,param)
                .then(function(data){
        
                        return data.json()
                })
                .then(function(result){
                        console.log(result.resultado)
                        document.getElementById('nombre').value = result.resultado.nombre;
                        document.getElementById('apellidos').value = result.resultado.apellido
                })
                .catch(function(error){
                        console.log(error)
                })
        }
        if(!id){
                fetch(url,param)
                .then(function(data){
        
                        return data.json()
                })
                .then(function(result){
                        console.log(result.resultado)
                })
                .catch(function(error){
                        console.log(error)
                })
        }

}

        
function putProfesional(){
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellidos').value
        let id = document.getElementById('id').value

        let profesional = {nombre : nombre,
                          apellido: apellido,
                          id: id}
        const url = 'http://localhost:4000/profesionales';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(profesional),
                method: "PUT"
        }

        fetch(url,param)
        .then(function(data){

                return data.json()
        })
        .then(function(result){
                console.log(result.resultado)
                console.log(result.array)
        })
        .catch(function(error){
                console.log(error)
        })
}

function deleteProfesional(){
        let id = document.getElementById('id').value

        let profesional = {id: id}
        const url = 'http://localhost:4000/profesionales';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(profesional),
                method: "DELETE"
        }

        fetch(url,param)
        .then(function(data){

                return data.json()
        })
        .then(function(result){
                console.log(result.resultado)
                console.log(result.distancia)
        })
        .catch(function(error){
                console.log(error)
        })
}



