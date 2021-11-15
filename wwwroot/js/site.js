/*************
 * 
 * Código javascript que cria uma cronometro que usa os horários em um método Date()
 * como base para marcar a passagem do tempo de forma mais precisa.
 * 
 *************/

 $(document).ready(function () {

    var crono;
    var tempoPause          = 0;
    var inicioCrono         = new Date(0);
    var tempoPercorrido     = new Date(0);
    var contaParcial        = 0;

    var formatoMilesimos  = "000";
    var formatoCronometro = "00:00:00.";

    mostrarBotoes("carregamentoPagina");

    $("#iniciar").click(function () {
        mostrarBotoes("clickIniciar");
        atualizarTempodeInicio();
        cronometrar();
    });

    $("#pause").click(function () {
        mostrarBotoes("clickPauseParar") 
        tempoPause = tempoPercorrido;
        clearTimeout(crono);
    });

    //to do
    $("#parcial").click(function () {
        if(contaParcial == 0){
            mostrarBotoes("clickParcial");
        }

        contaParcial++;
        $("#parciais").prepend(
            `<br><span class="parciais">${contaParcial} - </span>
             <span id="parcialCrono" class="text-dark parciais">${formatoCronometro}<sapn>
             <span id="parcialCronoMilsec" class="text-danger parcialMilsec">${formatoMilesimos}</span>`
        );
        
    });

    $("#parar").click(function () { 
        
        mostrarBotoes("clickPauseParar");
        clearTimeout(crono);

        tempoPause = 0;

        formatoMilesimos = "000";
        formatoCronometro = "00:00:00.";

        $("#milesimos").html(formatoMilesimos);
        $("#cronometro").html(formatoCronometro);

    });

    $("#limpaParciais").click(function () { 
        contaParcial = 0;
        $("#parciais").empty();
        mostrarBotoes("clickLimpaParciais");
    });

    //Função recursiva que roda o cronometro usando um metodo Date() como base.
    function cronometrar(){
       
        var milsec  = 0;
        var ss      = 0;
        var mm      = 0;
        var hh      = 0;
        var tempoFinal = new Date();

        if(tempoPause != 0){
            tempoPercorrido = tempoPause + (tempoFinal - inicioCrono);
        }else{
            tempoPercorrido = (tempoFinal - inicioCrono);
        }

        ss      = Math.floor(tempoPercorrido / 1000); //transforma de milesimos para segundos
        milsec  = tempoPercorrido % 1000;             //nao deixa passar de 999 milesimos
        mm      = Math.floor(ss / 60);                //transforma de segundos para minutos
        ss      = ss % 60;                            //nao deixa passar de 59 segundos
        hh      = Math.floor(mm / 60);                //transforma minutos em horas
        mm      = mm % 60;                            //nao deixa passar de 59 minutos

        formatoMilesimos  = ( milsec < 10 ? "00" + milsec : ( milsec < 100 ? "0" + milsec : milsec ));
        formatoCronometro = ( hh < 10 ? "0" + hh : hh ) + ":" + ( mm < 10 ? "0" + mm : mm ) + ":" + ( ss < 10 ? "0" + ss : ss ) + ".";    

        $("#milesimos").html(formatoMilesimos);
        $("#cronometro").html(formatoCronometro);

        crono = setTimeout(cronometrar, 33);
    }

    function atualizarTempodeInicio(){
        var tempInicio = new Date();
        inicioCrono = tempInicio;
    }

    function mostrarBotoes(configuracao){
        switch(configuracao){
            case "carregamentoPagina": 
                $("#pause").hide();
                $("#parcial").hide();
                $("#limpaParciais").hide();
                break;
            case"clickIniciar":
                $("#iniciar").hide();
                $("#pause").show();
                $("#parcial").show();
                break;
            case "clickPauseParar":
                $("#iniciar").show();
                $("#pause").hide();
                $("#parcial").hide();
                break;
            case "clickParcial":
                $("#limpaParciais").show();
                break;
            case "clickLimpaParciais":
                $("#limpaParciais").hide();
                break;
        }
    }

});