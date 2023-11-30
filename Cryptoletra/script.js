// --------------------------------
// DEFINICIÓN DE VARIABLES GLOBALES
// --------------------------------

let filas = 6; // Las filas coinciden con el número de intentos totales que tiene el jugador para adivinar la palabra
let columnas = 5; // Las columnas coinciden con el número de letras que tiene la palabra a adivinar

// Letras del teclado
let letras = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"], ["ENVIAR", "Z", "X", "C", "V", "B", "N", "M", "BORRAR"]];

// Diccionario de palabras válidas
let palabras = ["nieve", "hueso", "titan", "flujo", "disco", "razon", "mural", "abril", "vejez", "falso", "cañon", "obeso", "metal", "avena", "rubia", "pieza", "cuero", "noche", "bingo", "corto", "multa", "nieto", "dieta", "mosca", "nadal", "lider", "cerco", "rocio", "apoyo", "secta", "ganar", "besar", "novio", "albur", "litio", "llaga", "rueda", "corta", "feliz", "miope", "mojar", "cesta", "soplo", "nueve", "radio", "sexto", "sucio", "papel", "huevo", "polar", "rotar", "fuego", "lucir", "macho", "braza", "serio", "libra", "enano", "salsa", "ciego", "mujer", "sauna", "malta", "civil", "flota", "chile", "acudo", "modas", "criar", "hurto", "latir", "risas", "ganso", "suiza", "otoño", "suelo", "exito", "caber", "epica", "perra", "juego", "igneo", "ingle", "mango", "caida", "doler", "album", "sudar", "duque", "curro",
  "musgo", "varon", "crear", "carne", "ovulo", "nivel", "villa", "moral", "parte", "anexo", "tapiz", "fecha", "sesgo", "ligar", "chino", "patio", "votar", "torso", "avion", "dudar", "forja", "odiar", "utero", "cauce", "hogar", "relax", "yelmo", "regla", "marzo", "cairo", "aereo", "negro", "modal", "caldo", "museo", "abrir", "laser", "signo", "nariz", "peine", "turno", "coche", "pleno", "fibra", "faena", "sitio", "balsa", "ambar", "recta", "aquel", "impar", "tonto", "tirar", "caras", "fluir", "japon", "lugar", "coger", "traza", "tibio", "tenis", "monto", "curva", "oveja", "rumor", "sobra", "helio", "abaco", "gallo", "trama", "moler", "barro", "bando", "lista", "terna", "claro", "burla", "salir", "magia", "boxeo", "combo", "arepa", "dolar", "rifar", "ideal", "cinco", "cenar", "selva", "rayon", "tigre", "opera", "clave", 
  "arpon", "karma", "subir", "banda", "cavar", "tenaz", "prima", "cerda", "arder", "pañal", "mixta", "limon", "buena", "espia", "horno", "aguda", "polea", "sifon", "atomo", "cisne", "sufro", "sorda", "quedo", "teñir", "novia", "sordo", "teson", "curso", "suena", "queso", "frase", "flaco", "rubio", "drama", "traje", "calvo", "suero", "ebrio", "arbol", "gasto", "golfo", "cacho", "primo", "rombo", "falsa", "diosa", "flaca", "bahia", "dupla", "minar", "ilesa", "unica", "viaje", "anual", "gansa", "muela", "zorro", "nuevo", "sutil", "dogma", "rimar", "mente", "libro", "chula", "reves", "campo", "chico", "causa", "perro", "junto", "fauno", "digno", "tabla", "tocar", "culta", "piojo", "pivot", "droga", "cifra", "monte", "zurda", "cromo", "kayak", "frita", "marea", "oxido", "salmo", "fresa", "nadar", "presa", "bambu", "arena", 
  "acoso", "boxer", "panda", "siega", "siete", "junio", "india", "marca", "abajo", "vacio", "andes", "decir", "flama", "helar", "tarea", "danza", "poeta", "negra", "pacto", "pollo", "noble", "raton", "bolsa", "lirio", "turco", "buzon", "futon", "perla", "firme", "amado", "hinco", "plaza", "cabra", "regio", "cedro", "turba", "polio", "tropa", "luego", "cargo", "canal", "grama", "sabio", "viudo", "cocoa", "unico", "jaula", "peral", "pulpa", "gripe", "cielo", "capta", "movil", "icono", "canoa", "valle", "mixto", "tunel", "marco", "bañar", "vista", "troya", "hecho", "meter", "obvio", "palma", "guiar", "regia", "robot", "baron", "brujo", "rotor", "lejos", "punta", "pedir", "tarde", "nobel", "sidra", "pegar", "caoba", "reina", "segun", "sueño", "hielo", "feria", "mamba", "abeja", "carta", "baila", "pausa", "error", "rumbo", 
  "culto", "panel", "leona", "pelar", "sucia", "polvo", "cruel", "amiga", "padre", "traga", "liana", "acera", "samba", "color", "fumar", "andar", "cacao", "norma", "sanar", "texto", "dicta", "dosis", "seria", "veloz", "toque", "latex", "zurdo", "blusa", "arpia", "cerca", "reino", "honor", "abono", "mando", "grasa", "soñar", "caida", "magro", "copia", "guion", "video", "cesto", "oxido", "modem", "circo", "cegar", "coral", "erizo", "chica", "huida", "plano", "acido", "antro", "total", "bajar", "broma", "carga", "remar", "bella", "monje", "lenta", "rural", "arroz", "costa", "fruto", "cauto", "folio", "mansa", "roble", "oeste", "mundo", "pulpo", "cajon", "gnomo", "lucho", "armar", "bruja", "visto", "cazar", "ruina", "vello", "falla", "animo", "bicho", "calma", "letra", "placa", "tecla", "acuso", "facil", "misil", "forro", 
  "rival", "sueña", "aerea", "furor", "duelo", "bufon", "sacar", "señor", "biela", "racha", "prisa", "dueña", "clavo", "cerdo", "flora", "piano", "panal", "radar", "cueva", "pesca", "tumor", "plomo", "beber", "local", "guapo", "hebra", "yerba", "rapel", "silla", "himno", "monja", "clara", "apiño", "recto", "burro", "volar", "acaso", "rusia", "valla", "cruce", "quien", "ansia", "oasis", "nadie", "fetal", "freir", "pesar", "señal", "magno", "firma", "colmo", "viral", "menta", "pizza", "tengo", "ileso", "gamba", "canon", "mania", "cameo", "vivir", "furia", "rompe", "fallo", "oruga", "julio", "alzar", "altar", "llama", "calor", "cobra", "salvo", "lapiz", "playa", "crema", "medir", "ducha", "acida", "fisco", "fluor", "palmo", "tango", "cobre", "ninja", "censo", "apodo", "esqui", "hojea", "magra", "rompo", "agria", "chulo", 
  "alien", "bueno", "tejer", "vacio", "grano", "jugar", "deseo", "ostra", "apaga", "hotel", "tener", "ictus", "exijo", "toldo", "metro", "donut", "atroz", "angel", "hongo", "foton", "golpe", "puñal", "ronda", "fuera", "latin", "cofre", "talar", "tilde", "canto", "hueco", "rezar", "calle", "pluma", "orden", "vieja", "humor", "fusil", "fosil", "usual", "favor", "enero", "leche", "calza", "fruta", "comer", "pixel", "usted", "rango", "pitar", "bomba", "bamba", "manco", "robar", "punto", "preso", "poder", "alero", "gotea", "chica", "rabia", "nunca", "dulce", "tribu", "forma", "agudo", "rollo", "rugby", "jabon", "torta", "hiato", "diodo", "obvia", "riego", "temor", "trozo", "lunar", "motor", "cable", "cagar", "paseo", "banal", "union", "media", "mamut", "tedio", "labio", "bombo", "rasgo", "lider", "reloj", "razon", "torre", 
  "jarra", "laica", "ocaso", "amigo", "debil", "sabor", "menor", "indio", "dolor", "honra", "obesa", "techo", "ajeno", "tinte", "lemur", "plana", "caigo", "animo", "quema", "baton", "femur", "bolso", "rodar", "cabal", "ataud", "agrio", "atril", "pelea", "donar", "feroz", "linda", "datil", "farol", "norte", "rasta", "dañar", "motin", "negar", "gorra", "mafia", "letal", "lepra", "arabe", "laton", "angel", "padel", "pauta", "legua", "freno", "logro", "goteo", "rigor", "pizca", "magma", "ovalo", "virgo", "cursi", "batir", "momia", "aleta", "plaga", "apaña", "lleno", "vigor", "adobo", "junta", "pagar", "ajena", "rodeo", "acida", "plena", "palco", "asado", "ayuda", "magna", "vibra", "citar", "pulso", "mayor", "termo", "meson", "fondo", "tesis", "mueca", "calca", "solar", "prado", "pista", "sudor", "praga", "polen", "aroma", 
  "nuera", "plata", "orina", "libre", "habil", "barba", "fenix", "fiera", "hiena", "cloro", "legal", "jaque", "ozono", "caspa", "brazo", "actua", "azada", "cupon", "sedar", "queja", "peaje", "manta", "algun", "poema", "bruto", "lucha", "pinza", "ruido", "barca", "joder", "litro", "lento", "bello", "capaz", "floja", "pasta", "encia", "clase", "ciega", "congo", "pezon", "motel", "araña", "gorda", "enana", "venda", "estoy", "oigan", "chivo", "aliar", "tinta", "pecho", "ocupa", "mambo", "barco", "casco", "kenia", "creer", "plato", "mudar", "apnea", "manso", "crudo", "busto", "bromo", "ritmo", "banco", "simio", "deber", "etica", "viejo", "labor", "tarot", "fauna", "china", "liceo", "sismo", "docil", "acero", "horda", "salud", "linea", "carpa", "celta", "sushi", "tonta", "parto", "virar", "pecar", "falta", "narco", "guapa", 
  "miedo", "fugar", "medio", "tenor", "regar", "choca", "pared", "arden", "pasar", "genia", "herir", "savia", "posar", "segar", "vapor", "falda", "belen", "tramo", "corre", "madre", "zorra", "koala", "cerro", "lecho", "romeo", "morir", "aguja", "viuda", "botar", "rifle", "serie", "canje", "etico", "bravo", "capto", "epico", "ameba", "muero", "aforo", "cieno", "doblo", "salto", "santo", "bollo", "finta", "plazo", "cinta", "audio", "iluso", "ilusa", "grito", "sobre", "resto", "coste", "gramo", "grado", "grafo", "saldo", "carro", "sabia", "bulto", "terso", "tersa", "suave", "corte", "telon", "talon", "pesto", "pasto", "tarta", "sello", "sable", "largo", "lacio", "rasca", "rampa", "pulir", "saten", "salon", "flema", "ardor", "boton", "botin", "guiso", "podar", "dopar", "omega", "delta", "pinto", "poste", "suite", "trazo", 
  "brida", "clima", "tapon", "jalon", "mugir", "dotar", "susto", "tieso", "tiesa", "santa", "lejia", "farsa", "casar", "balon", "galon", "dueño", "donde", "curar", "talco", "fuero", "soler", "listo", "graso", "mecha", "recia", "recio", "fideo", "marta", "suela", "marte", "venus", "pardo", "parda"]

// Posición actual del jugador
let fila = 0; // Primer intento
let columna = 0; // Primera letra de la palabra

// Palabra a adivinar, seleccionada aleatoriamente de la lista de palabras
let palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();

// Estado del juego
let gameOver = false;

// Si el usuario pierde o gana
let victoria = false;




// -----------------------
// EJECUCIÓN DEL PROGRAMA
// -----------------------

window.onload = function(){
  let instrucciones = document.getElementById("instrucciones");

  let intrucciones_boton = document.getElementById("instrucciones-btn");
  intrucciones_boton.addEventListener("click", function() {
    instrucciones.classList.add("visible");
  })
  let cerrar = document.getElementById("cerrar");
  cerrar.addEventListener("click", function() {
    instrucciones.classList.remove("visible");
  })

  crearTablero();
  crearTeclado();
  inputFisico();
}




// -----------------------
// DEFINICIÓN DE FUNCIONES
// -----------------------


// Función que se ejecuta una vez el juego termina, para mostrar la ventana final
function mostrarFinal() { 
  let final = document.getElementById("final");
  final.classList.add("visible")

  // Creamos un texto y cuyo contenido dependerá de si el usuario ha ganado o perdido
  texto = document.createElement("div");
  if (victoria) {
    texto.innerText = "¡Enhorabuena! Has ganado la partida.";
  } else {
    texto.innerText = "¡Has perdido! La palabra era " + palabra + ".";
  }

  // Creamos un botón para que el usuario pueda volver a jugar una nueva partida
  btn = document.createElement("button");
  btn.classList.add("nueva-partida");
  btn.innerText = "Volver a jugar";
  btn.addEventListener("click", function() {
    location.reload();
  })

  // Creamos un separador y espacios para que el texto y el botón no estén pegados
  separador = document.createElement("hr");
  espacio1 = document.createElement("br");
  espacio2 = document.createElement("br");

  // Agregamos el texto, el separador y el botón al elemento con el id "final"
  final.appendChild(texto);
  final.appendChild(espacio1);
  final.appendChild(separador);
  final.appendChild(espacio2);
  final.appendChild(btn);
}


// Función que genera un array con todas las posiciones posibles de las casillas en una fila
function generarArray() { 
  let array = [];
  for (let i = 0; i < columnas; i++) {
    array.push(i);
  }
  return array;
}


// Función que escoge una posición aleatoria entre todas las posiciones posibles de las casillas en una fila
function posicionAleatoria(array) { 
  // Escogemos un índice aleatorio entre todos los elementos del array
  let indice = Math.floor(Math.random() * array.length); 

  let posicion = array[indice];

  // Eliminamos el elemento que hemos elegido aleatoriamente para que no se repita la posición cuando volvemos a llamar a la función
  array.splice(indice, 1); 

  return posicion;
}


// Función que crea el tablero de juego. Se podría hacer en HTML, pero allí no se pueden hacer iteraciones y tomaría más espacio
function crearTablero() { 
  // Creamos un array con las posiciones de las casillas que no se han ocultado. A medida que ocultamos casillas, eliminamos las posiciones de este array
  // Lo hacemos con el fin de que no se repitan las posiciones de las casillas ocultas en las filas
  let casillasSinOcultar = generarArray(); 

  // Definimos la posición de la casilla que se ocultará en cada fila y la última posición que hemos ocultado
  let casillaOculta, ultimaPosicion;

  for (let i = 0; i < filas; i++) {

    // Si ya hempos ocultado todas las casillas una vez, reseteamos el array de casillas que no se han ocultado para seguir ocultando casillas
    if (casillasSinOcultar.length === 0) { 

      let array = generarArray();

      // Eliminamos la última posición que hemos ocultado para que no se repita, ya que no queremos que se oculten las mismas casillas en dos filas seguidas
      array.splice(ultimaPosicion, 1);

      // Escogemos una posición aleatoria entre las casillas que aún no se han ocultado
      casillaOculta = posicionAleatoria(array);

    // Si aún quedan casillas por ocultar, escogemos una posición aleatoria entre las casillas que aún no se han ocultado
    } else { 
      
      casillaOculta = posicionAleatoria(casillasSinOcultar);

      // Si tras hacer la selección de la casilla oculta queda el array de casillas sin ocultar vacío, guardamos la última posición que hemos ocultado para evitar repeticiones posteriormente
      if (casillasSinOcultar.length === 0) { 
        ultimaPosicion = casillaOculta;
      }

    }

    for (let j = 0; j < columnas; j++) {

      // Creamos una etiqueta span para cada casilla
      let casilla = document.createElement("span"); 

      // Agregamos la clase "casilla" a la etiqueta span que hemos creado
      casilla.classList.add("casilla"); 

      // Agregamos un id a la casilla: casilla-0-0, casilla-0-1, casilla-0-2, etc.
      casilla.id = "casilla-" + i + "-" + j; 

      // Agregamos un texto vacío a la casilla
      casilla.innerText = ""; 

      // Si la columna coincide con la columna oculta, agregamos la clase oculta a la casilla
      if (j === casillaOculta) { 
        casilla.classList.add("oculta");
      }

      // Agregamos la etiqueta span que hemos creado al elemento con el id "tablero"
      document.getElementById("tablero").appendChild(casilla); 
    }
  }
}


// Función que crea el teclado de juego
function crearTeclado() { 
  for (let i = 0; i < letras.length; i++) {
    // Creamos una etiqueta div para cada línea del teclado
    let linea = document.createElement("div"); 

    for (let j = 0; j < letras[i].length; j++) {
      // Creamos un botón para cada tecla del teclado
      let tecla = document.createElement("button"); 

      // Agregamos la clase "tecla" a la tecla
      tecla.classList.add("tecla"); 

      // Agregamos el texto que corresponde a la tecla que estamos creando
      tecla.innerText = letras[i][j]; 

      // Agregamos un id a la tecla: Q, W, E, R, etc.
      if (tecla.innerText === "ENVIAR") {
        tecla.id = "Enter";
      } else if (tecla.innerText === "BORRAR") {
        tecla.id = "Backspace";
      } else {
        tecla.id = tecla.innerText;
      }

      // Agregamos un evento a cada tecla para que se ejecute la función inputTecla cuando el usuario haga click en el botón la tecla
      tecla.addEventListener("click", inputTecla); 

      // Agregamos el botón que hemos creado a la etiqueta div linea que hemos creado
      linea.appendChild(tecla); 
    }

    // Agregamos cada linea al elemento con el id "teclado"
    document.getElementById("teclado").appendChild(linea); 
  }
}


function inputFisico() { // Función que se ejecuta cuando el usuario presiona una tecla del teclado físico
  document.addEventListener("keyup", function(e) {
    inputUsuario(e);
  })
}



// Función que se ejecuta cuando el usuario presiona una tecla del teclado virtual
function inputTecla() { 
  // Creamos un objeto con la propiedad key que contiene el id de la tecla que el usuario ha presionado
  let e = {key: this.id}; 

  // Ejecutamos la función inputUsuario para analizar el input del usuario
  inputUsuario(e);
}


// Función que se ejecuta cuando el usuario hace un input, ya sea por tecla o por click
function inputUsuario(e) { 
  // Cuando el juego termina, dejamos de escuchar lo que el usuario escribe
  if (gameOver) { 
    return;
  } 
  
  // Limitamos las teclas que el usuario puede presionar para jugar, si no es válida, no hacemos nada

  // Analizamos si el usuario ha presionado una tecla entre la A y la Z incluyendo la Ñ
  if (/^[a-zA-ZñÑ]$/.test(e.key)) {
    // Sólo agregamos letras si el usuario no ha completado la palabra (es decir, si no ha llegado a la última columna)
    if (columna < columnas) { 
      let casillaActual = document.getElementById("casilla-" + fila + "-" + columna);

      // Sólo agregamos letras si la casilla está vacía para evitar sobreescribir letras
      if (casillaActual.innerText === "") { 
        // Agregamos la letra que el usuario ha presionado a la casilla actual.
        casillaActual.innerText = e.key.toUpperCase(); 

        // Aumentamos la columna para cambiar de casilla y que el usuario pueda agregar la siguiente letra
        columna++; 
      }
    }

  // Analizamos si el usuario ha presionado la tecla "Backspace", entonces borramos la última letra que el usuario ha escrito
  } else if (e.key == "Backspace") {
    // Sólo borramos letras si el usuario ha escrito al menos una letra
    if (columna > 0 && columna <= columnas) { 
      // Disminuimos la columna para que el usuario pueda escribir en la casilla anterior
      columna--; 

      let casillaActual = document.getElementById("casilla-" + fila + "-" + columna);

      // Borramos el contenido de la casilla actual, que es la que el usuario quiere borrar
      casillaActual.innerText = ""; 
    }

  // Analizamos si el usuario ha presionado la tecla "Enter", entonces comprobamos si la palabra es correcta
  } else if (e.key == "Enter") { 
     // Sólo comprobamos la palabra si el usuario ha escrito todas las letras
    if (columna === columnas) {
      comprobarPalabra();
    }
  }

  // Tras comprobar la palabra, si el usuario se ha quedado sin intentos, pierde
  if (fila === filas && !gameOver) {
    gameOver = true;
    let perder = document.getElementById("perder");
    perder.play();
    mostrarFinal();
  }
}


// Función encargada de comprobar si la palabra que el usuario ha escrito es correcta y evaluamos el resultado
function comprobarPalabra() { 
  // Variable que lleva la cuenta de el número de letras que el usuario ha acertado
  let correctas = 0; 

  // Variable que guarda la palabra que el usuario ha escrito
  let palabraUsuario = ""; 

  // Recorremos todas las casillas de la fila actual para obtener la palabra que el usuario ha escrito
  for (let i = 0; i < columnas; i++) {
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    palabraUsuario += casillaActual.innerText;
  }

  // Para poder comparar la palabra del usuario con la lista de palabras, convertimos el intento a minúsculas
  palabraUsuario = palabraUsuario.toLowerCase(); 

  // Antes de analizar la palabra, nos salimos de la función si el usuario ha escrito una palabra que no está en la lista de palabras y se lo notificamos
  if (!palabras.includes(palabraUsuario)) { 
    // Creamos un mensaje de alerta y reproducimos un sonido
    let no_dict = document.getElementById("no_diccionario");
    no_dict.play();

    const mensaje = document.createElement("div");
    mensaje.classList.add("alerta");
    mensaje.innerText = "La palabra \'" + palabraUsuario + "\' no está en la lista de palabras.";
    mensaje.style.display = "block";

    document.getElementById("mensaje").appendChild(mensaje);

    // Después de 5 segundos, ocultamos el mensaje automáticamente
    setTimeout(() => { 
      mensaje.style.display = "none";
    }, 5000);

    return;
  }

  // Hacemos mapeo para llevar la cuenta de el número de veces que aparece cada letra en la palabra
  let mapLetras = {};
  for (let i = 0; i < palabra.length; i++) {
    if (mapLetras[palabra[i]]) {
      mapLetras[palabra[i]]++;
    } else {
      mapLetras[palabra[i]] = 1;
    }
  }

  // Ahora analizamos la palabra que el usuario ha escrito

  // Primero miramos las posiciones correctas
  for (let i = 0; i < columnas; i++) { 
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    let teclaActual = document.getElementById(casillaActual.innerText);
    
    // Marcamos como correctas aquellas casillas que el usuario ha escrito en la posición correcta
    if (casillaActual.innerText === palabra[i]) {
      correctas++;

      // Si la casilla es oculta, no la marcamos como correcta porque no podemos revelar información
      if (!casillaActual.classList.contains("oculta")) {

        // Eliminamos una aparición de la letra en el mapa para saber que ya hemos marcado la letra
        mapLetras[casillaActual.innerText]--;

        casillaActual.classList.add("correcta");

        // Si la casilla es correcta, también marcamos la tecla del teclado virtual como correcta
        teclaActual.classList.add("correcta");
      }
    }

    // Si las casillas correctas coinciden con el número de columnas, el usuario ha adivinado la palabra., fin de juego
    if (correctas === columnas) {
      gameOver = true;
      victoria = true;
      let ganar = document.getElementById("ganar");
      ganar.play();
      mostrarFinal();
    }
  }

  // En la segunda vuelta, miramos las posiciones incorrectas y nulas
  for (let i = 0; i < columnas; i++) { 
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    let teclaActual = document.getElementById(casillaActual.innerText);

    // Vemos que sólo analizamos la casilla si no está marcada como correcta ni oculta
    if (!casillaActual.classList.contains("correcta") && !casillaActual.classList.contains("oculta")) { // Nos aseguramos que no estamos mirando una posición correcta ni oculta
      
      // Está en la posición incorrecta si la letra está en la palabra y aún quedan apariciones de la letra en el mapa
      if (palabra.includes(casillaActual.innerText) && mapLetras[casillaActual.innerText] > 0) {

        // Eliminamos una aparición de la letra en el mapa para saber que ya hemos marcado la letra
        mapLetras[casillaActual.innerText]--;

        casillaActual.classList.add("incorrecta");

        // Si la casilla es incorrecta, también marcamos la tecla del teclado virtual como incorrecta
        teclaActual.classList.add("incorrecta");
      
      // Si no es correcta, ni oculta, ni incorrecta, es nula
      } else {
        casillaActual.classList.add("nula");
        teclaActual.classList.add("nula");
      }
    }
  }
  // Tras analizar la palabra:

  // Aumentamos la fila para que el usuario pueda agregar la siguiente letra
  fila++; 

  // Reiniciamos la columna para que el usuario pueda agregar la primera letra de la siguiente palabra
  columna = 0; 
}