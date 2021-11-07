function getAlumno(){
        let id = document.getElementById('id').value
        let url = 'http://localhost:5000/alumnos';

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
                        console.log(id)
                        console.log(result.resultado)
                        document.getElementById('nombre').value = result.resultado[0].first_name;
                        document.getElementById('apellidos').value = result.resultado[0].last_name;
                        document.getElementById('grupo').value = result.resultado[0].grupo_id;
                        document.getElementById('ingreso').value = result.resultado[0].ingreso;
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
                        console.log(result.resultado);
                        let array = [];

                        for( let i = 0; i<result.resultado.length; i++){
                                array.push(JSON.stringify(result.resultado[i]))
                        }
                        document.getElementById('alumnos').innerHTML = `${array}`

                })
                .catch(function(error){
                        console.log(error)
                })
        }

}
function postAlumno(){
        let name =  document.getElementById("nombre").value
        let apellido =  document.getElementById("apellidos").value
        let grupo=  document.getElementById("grupo").value
        let ingreso =  document.getElementById("ingreso").value

        let alumno = {
                first_name : name,
                last_name : apellido,
                grupo_id : grupo,
                ingreso : ingreso
        }

        const url = 'http://localhost:5000/alumnos';

        console.log(alumno)

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(alumno),
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
function putAlumno(){
        let name =  document.getElementById("nombre").value
        let apellido =  document.getElementById("apellidos").value
        let grupo=  document.getElementById("grupo").value
        let id = document.getElementById('id').value

        let alumno = {
                first_name : name,
                last_name : apellido,
                grupo_id : grupo,
                ingreso : ingreso,
                id : id
        }
        const url = 'http://localhost:5000/alumnos';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(alumno),
                method: "PUT"
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
function deleteAlumno(){
        let id = document.getElementById('id').value

        let alumno = {id: id}
        const url = 'http://localhost:5000/alumnos';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(alumno),
                method: "DELETE"
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

//NOTAS
function getNota(){
        let id = document.getElementById('id').value
        let url = 'http://localhost:5000/notas';

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
                        console.log(id)
                        console.log(result)
                        document.getElementById('fecha').value = result.resultado[0].date;
                        document.getElementById('nota').value = result.resultado[0].mark;
                        document.getElementById('asignatura').value = result.resultado[0].subject_id;
                        document.getElementById('id').value = result.resultado[0].student_id;
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
                        console.log(result.resultado);
                        let array = [];

                        for( let i = 0; i<result.resultado.length; i++){
                                array.push(JSON.stringify(result.resultado[i]))
                        }
                        document.getElementById('notas').innerHTML = `${array}`

                })
                .catch(function(error){
                        console.log(error)
                })
        }
}
function postNota(){
        let fecha =  document.getElementById("fecha").value
        let nota =  document.getElementById("nota").value
        let asignatura =document.getElementById("asignatura").value
        let id=  document.getElementById("id").value

        let alumno = {
                date : fecha,
                mark : nota,
                subject_id: asignatura,
                student_id : id,
        }

        const url = 'http://localhost:5000/notas';

        console.log(alumno)

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(alumno),
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

function putNota(){
        let fecha =  document.getElementById("fecha").value
        let nota =  document.getElementById("nota").value
        let asignatura =document.getElementById("asignatura").value
        let id=  document.getElementById("id").value

        let alumno = {
                date : fecha,
                mark : nota,
                subject_id: asignatura,
                id : id,
        }

        const url = 'http://localhost:5000/notas';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(alumno),
                method: "PUT"
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
function deleteNota(){
        let id = document.getElementById('id').value

        let nota = {id: id}
        const url = 'http://localhost:5000/notas';

        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                body: JSON.stringify(nota),
                method: "DELETE"
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

//ADICIONALES
function getMedia(){
        console.log("llega")
        let id = document.getElementById('id').value
        let url = 'http://localhost:5000/media';

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
                        console.log(id)
                        console.log(result)
                        document.getElementById('resultado').value = result.resultado[0].media;
                })
                .catch(function(error){
                        console.log(error)
                })
        }
        if(!id){
                document.getElementById('resultado').value = "Tienes que poner un id"
        }
}
function getApuntadas(){
        console.log("llega")
        let id = document.getElementById('id').value
        let url = 'http://localhost:5000/apuntadas';

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
                        console.log(id)
                        console.log(result)
                        let array = []
                        for(let i = 0;i<result.resultado.length;i++){
                                array.push(result.resultado[i].title)
                        }
                        document.getElementById('resultado').value = array
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
                        console.log(result);
                        let array = [];

                        for( let i = 0; i<result.resultado.length; i++){
                                array.push(JSON.stringify(result.resultado[i]))
                        }
                        document.getElementById('notas').innerHTML = `${array}`

                })
                .catch(function(error){
                        console.log(error)
                })
        }
}
function getImpartidas(){
        console.log("llega")
        let id = document.getElementById('id').value
        let url = 'http://localhost:5000/impartidas';

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
                        console.log(id)
                        console.log(result)
                        let array = []
                        for(let i = 0;i<result.resultado.length;i++){
                                array.push(result.resultado[i].title)
                        }
                        document.getElementById('resultado').value = array
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
                        console.log(result);
                        let array = [];

                        for( let i = 0; i<result.resultado.length; i++){
                                array.push(JSON.stringify(result.resultado[i]))
                        }
                        document.getElementById('notas').innerHTML = `${array}`

                })
                .catch(function(error){
                        console.log(error)
                })
        }
}