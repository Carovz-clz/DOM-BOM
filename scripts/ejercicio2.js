var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var iniciaJuego = 0;
var jugadas = 9;
var jugador = 1;
var jugador1 = 0;
var jugador2 = 0;

function iniciarJuego() {
    if (iniciaJuego === 0) {
        iniciaJuego = 1;
        jugador1 = document.getElementById("jugador1").value;
        jugador2 = document.getElementById("jugador2").value;
    }
}

function pintaCelda(celda) {
    if (jugador === 1) {
        document.getElementById('c'+celda).className = "jugador1";
        tablero[celda] = 1;
        jugador = 2;
        jugadas--;
        return 1;
    }
    else {
        document.getElementById('c'+celda).className = "jugador2";
        tablero[celda] = 2;
        jugador = 1;
        jugadas--;
        return 2;
    }
}


function reiniciar() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('c' + i).className = "reiniciar";
        tablero[i] = 0;
    }

    iniciaJuego = 0;
    jugador = 1;
    jugadas = 9;
}

function jugar(celda) {
    let jugadorActual = 0;
    if ((iniciaJuego === 1) && (jugadas>0)){

        jugadorActual = pintaCelda(celda);
        

        if( (tablero[0] === tablero[1]) && (tablero[1] === tablero[2]) && (tablero[0]!=0)){ //Primera fila
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }        
        else if ( (tablero[3] === tablero[4]) && (tablero[4] === tablero[5]) && (tablero[3]!=0)){ //Segunda fila
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        else if ( (tablero[6] === tablero[7]) && (tablero[7] === tablero[8]) && (tablero[6]!=0)){ //tercera fila
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        else if ( (tablero[0] === tablero[3]) && (tablero[3] === tablero[6]) && (tablero[6]!=0)){ //Primera columna
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        else if ( (tablero[1] === tablero[4]) && (tablero[4] === tablero[7]) && (tablero[7]!=0)){ //Segunda columna
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        else if ( (tablero[2] === tablero[5]) && (tablero[5] === tablero[8]) && (tablero[8]!=0)){ //Tercera columna
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        else if ( (tablero[0] === tablero[4]) && (tablero[4] === tablero[8]) && (tablero[8]!=0)){ //Primera diagonal
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        else if ( (tablero[2] === tablero[4]) && (tablero[4] === tablero[6]) && (tablero[6]!=0)){ //Primera diagonal
            alert('El jugador '+jugadorActual+' ha ganado!!');
        }
        

    }
    else if ((iniciaJuego === 0) && (jugadas>0)){
        alert("Pulsa el botón iniciar para jugar!!!");
    }
    else{
        alert("Fin del juego! Pulsa reiniciar!");
        iniciaJuego = 0;
    }

}