/*************
 * 
 * Script que faz uma requisição em um api com vários fusos e mostra a hora no navegador
 * 
 *************/

 $(document).ready(function () {
    
    var options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch("https://worldtimeapi.org/api/timezone/America", options)
    .then( response => { response.json()
        .then( data => console.log(data))
    })
    .catch(e => console.log("Errou!: " + e.message))

});