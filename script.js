// Retorna el value del radio seleccionado //
function getRespuestaRadio(object) {
    
    for (var i=0; i < object.length ; i++  ){

        if(object[i].checked){            
           return object[i].value;
        }
    }
}

// Crea un array con los valores "true" o "false" dependiendo si el checkbox esta seleccionado//
function getRespuestasCheckBox(object){

    var respuestas = new Array(4);

    for (var i=0; i < object.length ; i++  ){

        if(object[i].checked){            
            
            respuestas[i] = true;
        } else {
            respuestas[i] = false;
        }
    }
    return respuestas;
}

var cerrarresultado = function(){
    document.getElementById("resultadoparcial").style.display = 'none';

}

// Modifica el section, otorgando los resultados del examen
var resultado = function(){

    var puntaje = 0;
    var parcial = new Array(10);

    // Pregunta 1
    var eleccion_pregunta1= getRespuestaRadio(document.getElementsByName("preg1"));
    if(eleccion_pregunta1 == 1){
        puntaje += 10;
        parcial[0] = true;
    }

    // Pregunta 2
    var eleccion_pregunta2 = getRespuestaRadio(document.getElementsByName("preg2"));
    if(eleccion_pregunta2 == 2){
        puntaje += 10;
        parcial[1] = true;
    }

    // Pregunta 3
    var respuesta_pregunta3 = document.getElementById("preg3").value;
    if(respuesta_pregunta3.toUpperCase() == "PERDIDA" || respuesta_pregunta3.toUpperCase() == "PERDIDAS" ){
        puntaje += 10;
        parcial[2] = true;
    }

    // Pregunta 4
    var respuestas_pregunta4 = getRespuestasCheckBox(document.getElementsByName("preg4"));
    var contestadas = 0;
    for(var i = 0; i < respuestas_pregunta4.length ; i++ ){

        if ((i == 0 || i == 1) && respuestas_pregunta4[i] == true){
            puntaje += 5;
            contestadas += 1;
        }

    }
    if(contestadas == 2){
        parcial[3] = true;
    }

    // Pregunta 5
    var respuesta_pregunta5 = document.getElementById("preg5").value;
    if(respuesta_pregunta5.toUpperCase() == "GANANCIA" || respuesta_pregunta5.toUpperCase() == "GANANCIAS" ){
        puntaje += 10;
        parcial[4] = true;
    }

    // Pregunta 6
    var respuesta_pregunta6 = document.getElementById("preg6").value;
    if(respuesta_pregunta6 == "debe"){
        puntaje += 10;
        parcial[5] = true;
    }

    // Pregunta 7
    var respuesta_pregunta7 = document.getElementById("preg7").value;
    if(respuesta_pregunta7.toUpperCase() == "VALORES A DEPOSITAR" || respuesta_pregunta7.toUpperCase() == "VAL A DEPOSITAR" || respuesta_pregunta7.toUpperCase() == "VAL A DEP" ){
        puntaje += 10;
        parcial[6] = true;
    }

    // Pregunta 8
    var respuestas_pregunta8 = getRespuestasCheckBox(document.getElementsByName("preg8"));
    contestadas = 0;
    for(var i = 0; i < respuestas_pregunta8.length ; i++ ){

        if ((i == 1 || i == 3) && respuestas_pregunta8[i] == true){
            puntaje += 5;
            contestadas += 1;
        }

    }
    if(contestadas == 2){
        parcial[7] = true;
    }

    // Pregunta 9
    var respuestas_pregunta9 = getRespuestasCheckBox(document.getElementsByName("preg9"));
    contestadas = 0;
    for(var i = 0; i < respuestas_pregunta9.length ; i++ ){

        if ((i == 0 || i == 2) && respuestas_pregunta9[i] == true){
            puntaje += 5;
            contestadas += 1;
        }

    }
    if(contestadas == 2){
        parcial[8] = true;
    }

    // Pregunta 10
    var respuesta_pregunta10 = document.getElementById("preg10").value;
    if(respuesta_pregunta10.toUpperCase() == "DOCUMENTOS A PAGAR" || respuesta_pregunta10.toUpperCase() == "DOC A PAGAR" || respuesta_pregunta10.toUpperCase() == "OBLIGACIONES A PAGAR" ){
        puntaje += 10;
        parcial[9] = true;
    }

    document.getElementById("resultadoparcial").style.display = 'block';
    document.getElementById("resultadoparcial1").style.textAlign = 'center';
    document.getElementById("puntajeparcial").style.textAlign = 'center';
    document.getElementById("puntajeparcial").innerHTML = "Tu puntaje: " + puntaje + " / 100";

    if (puntaje >= 60){
        document.getElementById("resultadoparcial1").innerHTML = "¡¡Has aprobado el exámen, felicitaciones!!";
        document.getElementById("resultadoparcial1").style.color = '#72DB76'
        document.getElementById("true").style.display = 'block';
        document.getElementById("false").style.display = 'none';
    }

    if (puntaje < 60){
        document.getElementById("resultadoparcial1").innerHTML = "Has desaprobado el exámen, suerte para la próxima.";
        document.getElementById("resultadoparcial1").style.color = '#DB4B3C';
        document.getElementById("false").style.display = 'block';
        document.getElementById("true").style.display = 'none';
    }

    for(var i = 0 ; i < parcial.length ; i++){

        document.getElementById("mostrarpreg" +i).innerHTML = "Pregunta N°"+ (i+1);
        if(parcial[i] == true){
            document.getElementById("resultadopreg" +i).innerHTML = "Correcta";
            document.getElementById("resultadopreg" +i).style.color = '#72DB76'
        } else {
            document.getElementById("resultadopreg" +i).innerHTML = "Incorrecta";
            document.getElementById("resultadopreg" +i).style.color = '#DB4B3C';
        }
    }
}