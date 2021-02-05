var index = 0;
var guionesAux;
var letras;
var ArrayBotones;
var contador;
var palabra;

function comenzar() {
    document.getElementById("start").style.display = "inline";
    document.getElementById("titulo").hidden = true;
    document.getElementById("comenzar").style.display = "none";
    document.getElementById("Win_Loose").textContent = "";
    document.getElementById("restart").style.display = "none";
    document.getElementById("palabra").textContent = "";
    document.getElementById("categoria1").hidden = false;
    document.getElementById("categoria2").hidden = false;
    document.getElementById("imagen").hidden = false;
    document.getElementById("imagen").src = "img/choose.jpg";
    document.body.style.backgroundImage = "none";
    document.body.style.animation = "none";
    document.body.style.backgroundColor = "#D2B4DE";




}

//Elegir campo semantico
function elegirCampo() {
    var lista = document.getElementById("categoria2");
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var valorSeleccionado = opcionSeleccionada.value;

    if(indiceSeleccionado != 0){
    index = valorSeleccionado;
    document.getElementById("start").disabled = false;
    } else{
        document.getElementById("start").disabled = true;
    }
}

//Comenzar un nuevo juego
function StartGame() {
    Restart();

    //Obtener palabra
    var categoria = document.getElementById(index).textContent;
    var splitP = categoria.split(",");

    palabra = splitP[Math.floor(Math.random() * (splitP.length))].toUpperCase();
    console.log(palabra);

    //Convertir palabra en guiones
    var guiones = " ";
    letras = " ";
    letras = palabra.split('');

    for (var i = 0; i < letras.length; i++) {
        guiones = guiones + " _";
        guionesAux[i] = "_";
    }

    document.getElementById("palabra").textContent = guiones;


    //Generar botones
    ejecucionABC();

    //ocultar boton de nueva partida
    document.getElementById("start").style.display = "none";

}

//Generar botones
function generaABC(a, z) {
    document.getElementById("abcdario").innerHTML = "";
    var i = a.charCodeAt(0), j = z.charCodeAt(0);

    for (; i <= j; i++) {
        var letra = String.fromCharCode(i).toLocaleUpperCase();
        document.getElementById("abcdario").innerHTML += "<button value='" + letra + "'onclick='intento(this)' class='hola' id='" + letra + "'>" + letra + "</button>";
        if (i == 110) {
            document.getElementById("abcdario").innerHTML += "<button value='ñ' onclick='intento(\"Ñ\")'class='hola' id='" + letra + "'>Ñ</button>";
        }
        ArrayBotones[i] = document.getElementById(letra);
    }
}

function ejecucionABC() {
    generaABC("a", "z");

}

function intento(boton) {
    var valorB = boton.value;
    boton.disabled = true;

    var fallo = true;
    for (var i = 0; i < letras.length; i++) {
        if (valorB == letras[i]) {
            guionesAux[i] = valorB;
            fallo = false;
        }

    }

    //Comprobar fallo
    if (fallo) {
        document.getElementById("vidas").textContent = "Vidas: " + --contador;
        if (contador == 0) {
            document.getElementById("imagen").src = "img/Ahorcado_" + contador + "_Lose.gif";
        }
        else {
            document.getElementById("imagen").src = "img/Ahorcado_" + contador + ".png";
        }
    }

    //Imprimir palabra
    var solucion = "";
    guionesAux.forEach(space => solucion = solucion + " " + space);
    document.getElementById("palabra").textContent = solucion;

    //Comprobar si perdio o gano
    EndGame();
}

function EndGame() {
    //Comprobar si termino
    var hayGuion = false;
    for (var i = 0; i < guionesAux.length; i++) {
        if (guionesAux[i] == "_") {
            hayGuion = true;
            break;
        }
    }

    if (contador == 0) {
        Changes();
        document.getElementById("Win_Loose").textContent = "Perdiste";
        document.body.style.backgroundImage = "url(img/loose.gif)";
        

    } else if (!hayGuion) {
        Changes();
        document.getElementById("Win_Loose").textContent = "Ganaste";
        document.getElementById("imagen").src = "img/Ahorcado_0_Win.gif";
        document.body.style.backgroundImage = "url(img/win.gif)";
    }

}

function Restart() {
    //Inicializar variables
    contador = 6;
    palabra = ""
    guionesAux = ["_"];
    guionesAux2 = [];
    ArrayBotones = []

    //Mostrar elementos ocultos
    document.getElementById("imagen").hidden = false;
    document.getElementById("vidas").textContent = "Vidas: " + contador;
    document.getElementById("abcdario").style.display = "inline";
    document.getElementById("restart").style.display = "none";
    document.getElementById("Win_Loose").textContent = "";
    document.getElementById("imagen").src = "img/Ahorcado_" + contador + ".png";
    document.getElementById("categoria1").hidden = true;
    document.getElementById("categoria2").hidden = true;
    document.getElementById("vidas").hidden = false;
    document.body.style.backgroundColor = "#EC7063";

}

function Changes() {
    //Ocultar, mostrar y cambiar elementos.
    document.getElementById("abcdario").style.display = "none";
    document.getElementById("restart").style.display = "inline";
    document.getElementById("palabra").textContent = "La palabra era: " + palabra;
    document.getElementById("vidas").hidden = true;
    document.getElementById("abcdario").hidden = true;
}