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

    fetch("https://worldtimeapi.org/api/ip", options)
    .then( response => { response.json()
        .then( data => 
           $("#horaCerta").html(data.datetime)
        )
    })
    .catch(e => console.log("Errou!: " + e.message))

});