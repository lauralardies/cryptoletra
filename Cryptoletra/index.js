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
  entradaUsuario();
}

function crearTablero() {
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      let casilla = document.createElement("span"); // Creamos una etiqueta span
      casilla.classList.add("casilla"); // Agregamos la clase "casilla" a la etiqueta span que hemos creado
      casilla.id = "casilla-" + i + "-" + j; // Agregamos un id a la etiqueta span que hemos creado: casilla-0-0, casilla-0-1, casilla-0-2, etc.
      casilla.innerText = ""; // Agregamos un texto vacío a la etiqueta span que hemos creado
      document.getElementById("tablero").appendChild(casilla); // Agregamos la etiqueta span que hemos creado al elemento con el id "tablero"
    }
  }
}

function entradaUsuario () {

  document.addEventListener("keyup", function(e) {
    if (gameOver) { // Cuando el juego termina, dejamos de escuchar lo que el usuario escribe
      return;
    } 
    
    // Limitamos las teclas que el usuario puede presionar para jugar
    if (/^[a-zA-ZñÑ]$/.test(e.key)) {
      if (columna < columnas) { // Sólo agregamos letras si el usuario no ha completado la palabra (es decir, si no ha llegado a la última columna)
        let casillaActual = document.getElementById("casilla-" + fila + "-" + columna);
        if (casillaActual.innerText === "") { // Sólo agregamos letras si la casilla está vacía
          casillaActual.innerText = e.key.toUpperCase(); // Agregamos la letra que el usuario ha presionado a la casilla actual.
          columna++; // Aumentamos la columna para que el usuario pueda agregar la siguiente letra
        }
      }
    } else if (e.code == "Backspace") { // Si el usuario presiona la tecla "Backspace", borramos última la letra que el usuario ha escrito
      if (columna > 0 && columna <= columnas) { // Sólo borramos letras si el usuario ha escrito al menos una letra
        columna--; // Disminuimos la columna para que el usuario pueda borrar la letra anterior
        let casillaActual = document.getElementById("casilla-" + fila + "-" + columna);
        casillaActual.innerText = ""; // Borramos la letra de la casilla actual
      }
    } else if (e.code == "Enter") { // Si el usuario presiona la tecla "Enter", comprobamos si la palabra es correcta
      comprobarPalabra();
    }

    // Si el usuario se ha quedado sin intentos, pierde
    if (fila === filas && !gameOver) {
      gameOver = true;
    }
  })
}

function comprobarPalabra () {
  for (let i = 0; i < columnas; i++) {
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    if (casillaActual.innerText === palabra[i]) {
      casillaActual.classList.add("correcta");
    } else if (palabra.includes(casillaActual.innerText)) {
      casillaActual.classList.add("incorrecta");
    } else {
      casillaActual.classList.add("nula");
    }
  }
  fila++; // Aumentamos la fila para que el usuario pueda agregar la siguiente letra
  columna = 0; // Reiniciamos la columna para que el usuario pueda agregar la primera letra de la siguiente palabra
}