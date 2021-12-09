/*************
 * 
 * Script que faz uma requisição em um api com vários fusos e mostra a hora no navegador
 * 
 *************/

// to do: acesso regular a api para atualização constante da hora

 $(document).ready(function () {s

    var relogioFuso
    //var datetime           = new Date()
    var tempoInicioRelogio = new Date()
    var fusoAPI            = new Date()

    moment.locale('pt-br')
    
    var options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch("http://worldtimeapi.org/api/ip", options)
    .then( response => { response.json()
        .then( data => { mostraHora(data) })
    })
    .catch(e => console.log("Errou!: " + e.message))

    function mostraHora(dateJson){
        atualizaInicioRelogio()
        $("#horaCerta").html(moment(dateJson.datetime).format("H:mm:ss"))
        $("#data").html(moment(dateJson.datetime).format('dddd') + ', ' + moment(dateJson.datetime).format('LL'))
        
        fusoAPI.setTime(Date.parse(dateJson.datetime))   
        rodaRelogio()
    }

    //Função recursiva
    function rodaRelogio(){

        var tempoFinalRelogio = new Date()
        var tempoPercorrido = 0;
        var unixHoraAPI = fusoAPI.getTime()

        tempoPercorrido = tempoFinalRelogio - tempoInicioRelogio
        unixHoraAPI += tempoPercorrido

        $("#horaCerta").html(moment(unixHoraAPI).format("H:mm:ss"))

        /*console.log(moment(unixHoraAPIcopy).format("HH:mm:ss"))
        console.log(tempoPercorrido)*/

        relogioFuso = setTimeout(rodaRelogio, 300);

    }

    function atualizaInicioRelogio(){
        var tempAtual = new Date()
        tempoInicioRelogio = tempAtual
    }

});