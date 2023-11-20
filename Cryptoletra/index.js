let filas = 6; // Las filas coinciden con el número de intentos que tiene el jugador para adivinar la palabra
let columnas = 5; // Las columnas coinciden con el número de letras que tiene la palabra a adivinar

// Posición actual del jugador
let fila = 0; // Primer intento
let columna = 0; // Primera letra de la palabra

// Palabra a adivinar
let palabra = "AVION";

// Estado del juego
let gameOver = false;

window.onload = function(){
  crearTablero();
}

function crearTablero() {
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      let casilla = document.createElement("span"); // Creamos una etiqueta span
      casilla.classList.add("casilla"); // Agregamos la clase "casilla" a la etiqueta span que hemos creado
      casilla.id = "casilla-" + i + "-" + j; // Agregamos un id a la etiqueta span que hemos creado: casilla-0-0, casilla-0-1, casilla-0-2, etc.
      casilla.innerText = "A"; // Agregamos un texto vacío a la etiqueta span que hemos creado
      document.getElementById("tablero").appendChild(casilla); // Agregamos la etiqueta span que hemos creado al elemento con el id "tablero"
    }
  }
}