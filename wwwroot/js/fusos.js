/*************
 * 
 * Script que faz uma requisição em um api com vários fusos e mostra a hora no navegador
 * 
 *************/

 $(document).ready(function () {

    var datetime = new Date();
    
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
        console.log(dateJson.unixtime)
        $("#horaCerta").html(moment(dateJson.datetime).format("H:mm:ss"))
        $("#testeMilessimosHora").html(moment( datetime.getTime()).format( "YYYYMMDD"))
        //milesimosParaRelogio(dateJson.unixtime);
    }

    function milesimosParaRelogio(milesimos){

        var milsec  = 0;
        var ss      = 0;
        var mm      = 0;
        var hh      = 0;

        ss      = Math.floor(milesimos / 1000) //transforma de milesimos para segundos
        milsec  = milesimos % 1000             //nao deixa passar de 999 milesimos
        mm      = Math.floor(ss / 60)          //transforma de segundos para minutos
        ss      = ss % 60                      //nao deixa passar de 59 segundos
        hh      = Math.floor(mm / 60)          //transforma minutos em horas
        mm      = mm % 60
        
        //var formatoCronometro = ( hh < 10 ? "0" + hh : hh ) + ":" + ( mm < 10 ? "0" + mm : mm ) + ":" + ( ss < 10 ? "0" + ss : ss ) + "."
        //$("#testeMilessimosHora").html(formatoCronometro)
        //$("#testeMilessimosHora").html(moment("1637155899", "YYYYMMDD").fromNow());
    }

});

    /*console.log(`${datetime.getFullYear()} - ${datetime.getMonth()} - ${datetime.getDate()}`)
    console.log(`${datetime.getHours()} - ${datetime.getMinutes()} - ${datetime.getSeconds()}`)
    console.log(datetime.getTime())*/

    //milesimosParaRelogio(1637155899);