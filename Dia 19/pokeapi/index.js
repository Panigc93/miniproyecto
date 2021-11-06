function getPokemon(){
        let id = document.getElementById('form').value
        let url = 'https://pokeapi.co/api/v2/pokemon';
        console.log(id)
        let param = {
                headers:{"Content-type" : "application/json ; charset = UTF-8"},
                method: "GET"
        }
                url += "/" + id
                fetch(url,param)
                .then(function(data){
                        return data.json()
                })      
                .then(function(result){
                        console.log(result)
                        document.getElementById('descripcion').innerHTML =result.abilities[0].ability.name + " " +  result.abilities[1].ability.name 
                        document.getElementById('foto').innerHTML = `<img src= "${result.sprites.front_default}" alt="bola" id="fotito">`
                })
                .catch(function(error){
                        console.log(error)
                })
}