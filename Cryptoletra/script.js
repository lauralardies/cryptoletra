let filas = 6; // Las filas coinciden con el número de intentos que tiene el jugador para adivinar la palabra
let columnas = 5; // Las columnas coinciden con el número de letras que tiene la palabra a adivinar
let letras = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"], ["ENVIAR", "Z", "X", "C", "V", "B", "N", "M", "BORRAR"]];

// Posición actual del jugador
let fila = 0; // Primer intento
let columna = 0; // Primera letra de la palabra

// Palabra a adivinar
let palabra = "AVION";

// Estado del juego
let gameOver = false;

window.onload = function(){
  crearTablero();
  crearTeclado();
  entradaUsuario();
}

function generarArray() {
  let array = [];
  for (let i = 0; i < columnas; i++) {
    array.push(i);
  }
  return array;
}

function posicionAleatoria(array) {
  let indice = Math.floor(Math.random() * array.length); // Escogemos un índice aleatorio entre todos los elementos del array
  let posicion = array[indice];
  array.splice(indice, 1); // Eliminamos el elemento que hemos elegido aleatoriamente para que no se repita
  return posicion;
}

function crearTablero() {
  let casillasSinOcultar = generarArray(); // Creamos un array con las posiciones de las casillas que no se han ocultado. A medida que ocultamos casillas, eliminamos las posiciones de este array
  let casillaOculta, ultimaPosicion; // Posición de la casilla que se ocultará en cada fila
  for (let i = 0; i < filas; i++) {
    if (casillasSinOcultar.length === 0) { // Si ya no quedan casillas por ocultar, escogemos una posición aleatoria entre todas las casillas
      let array = generarArray();
      array.splice(ultimaPosicion, 1); // Eliminamos la última posición que hemos ocultado para que no se repita, ya que no queremos que se oculten dos casillas seguidas en filas seguidas
      casillaOculta = posicionAleatoria(array);
    } else { // Si aún quedan casillas por ocultar, escogemos una posición aleatoria entre las casillas que aún no se han ocultado
      casillaOculta = posicionAleatoria(casillasSinOcultar);
      if (casillasSinOcultar.length === 0) { // Si ya no quedan casillas por ocultar, guardamos la última posición que hemos ocultado
        ultimaPosicion = casillaOculta;
      }
    }
    for (let j = 0; j < columnas; j++) {
      let casilla = document.createElement("span"); // Creamos una etiqueta span
      casilla.classList.add("casilla"); // Agregamos la clase "casilla" a la etiqueta span que hemos creado
      casilla.id = "casilla-" + i + "-" + j; // Agregamos un id a la etiqueta span que hemos creado: casilla-0-0, casilla-0-1, casilla-0-2, etc.
      casilla.innerText = ""; // Agregamos un texto vacío a la etiqueta span que hemos creado
      if (j === casillaOculta) { // Si la columna coincide con la columna oculta, agregamos la clase oculta a la casilla
        casilla.classList.add("oculta");
      }
      document.getElementById("tablero").appendChild(casilla); // Agregamos la etiqueta span que hemos creado al elemento con el id "tablero"
    }
  
  }
}

function crearTeclado() {
  for (let i = 0; i < letras.length; i++) {
    let linea = document.createElement("div"); // Creamos una etiqueta div
    for (let j = 0; j < letras[i].length; j++) {
      let tecla = document.createElement("button"); // Creamos un botón
      tecla.classList.add("tecla"); // Agregamos la clase "tecla" al botón que hemos creado
      tecla.innerText = letras[i][j]; // Agregamos el texto que corresponde a la tecla que estamos creando
      linea.appendChild(tecla); // Agregamos el botón que hemos creado a la etiqueta div que hemos creado
    }
    document.getElementById("teclado").appendChild(linea); // Agregamos la etiqueta div que hemos creado al elemento con el id "teclado"
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
      if (columna === columnas) { // Sólo comprobamos la palabra si el usuario ha escrito todas las letras
        comprobarPalabra();
      }
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
    if (!casillaActual.classList.contains("oculta")) { // Si la casilla no está oculta, revelamos información. De lo contrario, no revelamos nada
      if (casillaActual.innerText === palabra[i]) {
        casillaActual.classList.add("correcta");
      } else if (palabra.includes(casillaActual.innerText)) {
        casillaActual.classList.add("incorrecta");
      } else {
        casillaActual.classList.add("nula");
      }
    }
  }
  fila++; // Aumentamos la fila para que el usuario pueda agregar la siguiente letra
  columna = 0; // Reiniciamos la columna para que el usuario pueda agregar la primera letra de la siguiente palabra
}