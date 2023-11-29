let filas = 6; // Las filas coinciden con el número de intentos que tiene el jugador para adivinar la palabra
let columnas = 5; // Las columnas coinciden con el número de letras que tiene la palabra a adivinar

// Letras del teclado
let letras = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"], ["ENVIAR", "Z", "X", "C", "V", "B", "N", "M", "BORRAR"]];

// Diccionario de palabras válidas
let palabras = ["nieve", "hueso", "titan", "flujo", "disco", "razon", "mural", "abril", "vejez", "falso", "cañon", "obeso", "metal", "avena", "rubia", "pieza", "cuero", "noche", "bingo", "corto", "multa", "nieto", "dieta", "mosca", "nadal", "lider", "cerco", "rocio", "apoyo", "secta", "ganar", "besar", "novio", "albur", "litio", "llaga", "rueda", "corta", "feliz", "miope", "mojar", "cesta", "soplo", "nueve", "radio", "sexto", "sucio", "papel", "huevo", "polar", "rotar", "fuego", "lucir", "macho", "braza", "serio", "libra", "enano", "salsa", "ciego", "mujer", "sauna", "malta", "civil", "flota", "chile", "acudo", "modas", "criar", "hurto", "latir", "risas", "ganso", "suiza", "otoño", "suelo", "exito", "caber", "epica", "perra", "juego", "igneo", "ingle", "mango", "caida", "doler", "album", "sudar", "duque", "curro",
  "musgo", "varon", "crear", "carne", "ovulo", "nivel", "villa", "moral", "parte", "anexo", "tapiz", "fecha", "sesgo", "ligar", "chino", "patio", "votar", "torso", "avion", "dudar", "forja", "odiar", "utero", "cauce", "hogar", "relax", "yelmo", "regla", "marzo", "cairo", "aereo", "negro", "modal", "caldo", "museo", "abrir", "laser", "signo", "nariz", "peine", "turno", "coche", "pleno", "fibra", "faena", "sitio", "balsa", "ambar", "recta", "aquel", "impar", "tonto", "tirar", "caras", "fluir", "japon", "lugar", "coger", "traza", "tibio", "tenis", "monto", "curva", "oveja", "rumor", "sobra", "helio", "abaco", "gallo", "trama", "moler", "barro", "bando", "lista", "terna", "claro", "burla", "salir", "magia", "boxeo", "combo", "arepa", "dolar", "rifar", "ideal", "cinco", "cenar", "selva", "rayon", "tigre", "opera", "clave", 
  "arpon", "karma", "subir", "banda", "cavar", "tenaz", "prima", "cerda", "arder", "pañal", "mixta", "limon", "buena", "espia", "horno", "aguda", "polea", "sifon", "atomo", "cisne", "sufro", "sorda", "quedo", "teñir", "novia", "sordo", "teson", "curso", "suena", "queso", "frase", "flaco", "rubio", "drama", "traje", "calvo", "suero", "ebrio", "arbol", "gasto", "golfo", "cacho", "primo", "rombo", "falsa", "diosa", "flaca", "bahia", "dupla", "minar", "ilesa", "unica", "viaje", "anual", "gansa", "muela", "zorro", "nuevo", "sutil", "dogma", "rimar", "mente", "libro", "chula", "reves", "campo", "chico", "causa", "perro", "junto", "fauno", "digno", "tabla", "tocar", "culta", "piojo", "pivot", "droga", "cifra", "monte", "zurda", "cromo", "kayak", "frita", "marea", "oxido", "salmo", "fresa", "nadar", "presa", "bambu", "arena", 
  "acoso", "boxer", "panda", "siega", "siete", "junio", "india", "marca", "abajo", "vacio", "andes", "decir", "flama", "helar", "tarea", "danza", "poeta", "negra", "pacto", "pollo", "noble", "raton", "bolsa", "lirio", "turco", "buzon", "futon", "perla", "firme", "amado", "hinco", "plaza", "cabra", "regio", "cedro", "turba", "polio", "tropa", "luego", "cargo", "canal", "grama", "sabio", "viudo", "cocoa", "unico", "jaula", "peral", "pulpa", "gripe", "cielo", "capta", "movil", "icono", "canoa", "valle", "mixto", "tunel", "marco", "bañar", "vista", "troya", "hecho", "meter", "obvio", "palma", "guiar", "regia", "robot", "baron", "brujo", "rotor", "messi", "punta", "pedir", "tarde", "nobel", "sidra", "pegar", "caoba", "reina", "segun", "sueño", "hielo", "feria", "mamba", "abeja", "carta", "baila", "pausa", "error", "rumbo", 
  "culto", "panel", "leona", "pelar", "sucia", "polvo", "cruel", "amiga", "padre", "traga", "liana", "acera", "samba", "color", "fumar", "andar", "cacao", "norma", "sanar", "texto", "dicta", "dosis", "seria", "veloz", "toque", "latex", "zurdo", "blusa", "arpia", "cerca", "reino", "honor", "abono", "mando", "grasa", "soñar", "caida", "magro", "copia", "guion", "video", "cesto", "oxido", "modem", "circo", "cegar", "coral", "erizo", "chica", "huida", "plano", "acido", "antro", "total", "bajar", "broma", "carga", "remar", "bella", "monje", "lenta", "rural", "arroz", "costa", "fruto", "cauto", "folio", "mansa", "roble", "oeste", "mundo", "pulpo", "cajon", "gnomo", "lucho", "armar", "bruja", "visto", "cazar", "ruina", "vello", "falla", "animo", "bicho", "calma", "letra", "placa", "tecla", "acuso", "facil", "misil", "forro", 
  "rival", "sueña", "aerea", "furor", "duelo", "bufon", "sacar", "señor", "carie", "racha", "prisa", "dueña", "clavo", "cerdo", "flora", "piano", "panal", "radar", "cueva", "pesca", "tumor", "plomo", "beber", "local", "guapo", "hebra", "yerba", "rapel", "silla", "himno", "monja", "clara", "apiño", "recto", "burro", "volar", "acaso", "rusia", "valla", "cruce", "quien", "ansia", "oasis", "nadie", "fetal", "freir", "pesar", "señal", "magno", "firma", "colmo", "viral", "menta", "pizza", "tengo", "ileso", "gamba", "canon", "mania", "cameo", "vivir", "furia", "rompe", "fallo", "oruga", "julio", "alzar", "altar", "llama", "calor", "cobra", "salvo", "lapiz", "playa", "crema", "medir", "ducha", "acida", "fisco", "fluor", "palmo", "tango", "cobre", "ninja", "censo", "apodo", "esqui", "hojea", "magra", "rompo", "agria", "chulo", 
  "alien", "bueno", "tejer", "vacio", "grano", "jugar", "deseo", "ostra", "apaga", "hotel", "tener", "ictus", "exijo", "toldo", "metro", "donut", "atroz", "angel", "hongo", "foton", "golpe", "puñal", "ronda", "fuera", "latin", "cofre", "talar", "tilde", "canto", "hueco", "rezar", "calle", "pluma", "orden", "vieja", "humor", "fusil", "fosil", "usual", "favor", "enero", "leche", "calza", "fruta", "comer", "pixel", "usted", "rango", "pitar", "bomba", "bamba", "manco", "robar", "punto", "preso", "poder", "alero", "gotea", "chica", "rabia", "nunca", "dulce", "tribu", "forma", "agudo", "rollo", "rugby", "jabon", "torta", "hiato", "diodo", "obvia", "riego", "temor", "trozo", "lunar", "motor", "cable", "cagar", "paseo", "banal", "union", "media", "mamut", "tedio", "labio", "bombo", "rasgo", "lider", "reloj", "razon", "torre", 
  "jarra", "laica", "ocaso", "amigo", "debil", "sabor", "menor", "indio", "dolor", "honra", "obesa", "techo", "ajeno", "tinte", "lemur", "plana", "caigo", "animo", "quema", "baton", "femur", "bolso", "rodar", "cabal", "ataud", "agrio", "atril", "pelea", "donar", "feroz", "linda", "datil", "farol", "norte", "rasta", "dañar", "motin", "negar", "gorra", "mafia", "letal", "lepra", "arabe", "laton", "angel", "padel", "pauta", "legua", "freno", "logro", "goteo", "rigor", "pizca", "magma", "ovalo", "virgo", "cursi", "batir", "momia", "aleta", "plaga", "apaña", "lleno", "vigor", "adobo", "junta", "pagar", "ajena", "rodeo", "acida", "plena", "palco", "asado", "ayuda", "magna", "vibra", "citar", "pulso", "mayor", "termo", "meson", "fondo", "tesis", "mueca", "calca", "solar", "prado", "pista", "sudor", "praga", "polen", "aroma", 
  "nuera", "plata", "orina", "libre", "habil", "barba", "fenix", "fiera", "hiena", "cloro", "legal", "jaque", "ozono", "caspa", "brazo", "actua", "azada", "cupon", "sedar", "queja", "peaje", "manta", "algun", "poema", "bruto", "lucha", "pinza", "ruido", "barca", "joder", "litro", "lento", "bello", "capaz", "floja", "pasta", "encia", "clase", "ciega", "congo", "pezon", "motel", "araña", "gorda", "enana", "venda", "estoy", "oigan", "chivo", "aliar", "tinta", "pecho", "ocupa", "mambo", "barco", "casco", "kenia", "creer", "plato", "mudar", "apnea", "manso", "crudo", "busto", "bromo", "ritmo", "banco", "simio", "deber", "etica", "viejo", "labor", "tarot", "fauna", "china", "liceo", "sismo", "docil", "acero", "horda", "salud", "linea", "carpa", "celta", "sushi", "tonta", "parto", "virar", "pecar", "falta", "narco", "guapa", 
  "miedo", "fugar", "medio", "tenor", "regar", "choca", "pared", "arden", "pasar", "genia", "herir", "savia", "posar", "segar", "vapor", "falda", "belen", "tramo", "corre", "madre", "zorra", "koala", "cerro", "lecho", "romeo", "morir", "aguja", "viuda", "botar", "rifle", "serie", "canje", "etico", "bravo", "capto", "epico", "ameba","muero", "aforo", "cieno", "doblo", "salto", "santo", "bollo", "finta", "plazo", "cinta", "audio", "iluso", "ilusa", "grito", "sobre", "resto", "coste", "gramo", "grado", "grafo", "saldo", "carro", "sabia", "bulto", "terso", "tersa", "suave", "corte", "telon", "talon", "pesto", "pasto", "tarta", "sello", "sable", "largo"]

// Posición actual del jugador
let fila = 0; // Primer intento
let columna = 0; // Primera letra de la palabra

// Palabra a adivinar, seleccionada aleatoriamente de la lista de palabras
let palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();

// Estado del juego
let gameOver = false;

// Si el usuario pierde o gana
let victoria = false;

// Inicializamos el juego
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


function mostrarFinal() { // Una vez que el juego termina, mostramos la ventana final
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

function generarArray() { // Genera un array con todas las posiciones posibles de las casillas en una fila
  let array = [];
  for (let i = 0; i < columnas; i++) {
    array.push(i);
  }
  return array;
}

function posicionAleatoria(array) { // Escoge una posición aleatoria entre todas las posiciones posibles de las casillas en una fila
  let indice = Math.floor(Math.random() * array.length); // Escogemos un índice aleatorio entre todos los elementos del array
  let posicion = array[indice];
  array.splice(indice, 1); // Eliminamos el elemento que hemos elegido aleatoriamente para que no se repita
  return posicion;
}

function crearTablero() { // Crea el tablero de juego
  let casillasSinOcultar = generarArray(); // Creamos un array con las posiciones de las casillas que no se han ocultado. A medida que ocultamos casillas, eliminamos las posiciones de este array
  let casillaOculta, ultimaPosicion; // Posición de la casilla que se ocultará en cada fila
  for (let i = 0; i < filas; i++) {
    if (casillasSinOcultar.length === 0) { // Si ya no quedan casillas por ocultar, escogemos una posición aleatoria entre todas las casillas
      let array = generarArray();
      array.splice(ultimaPosicion, 1); // Eliminamos la última posición que hemos ocultado para que no se repita, ya que no queremos que se oculten las mismas casillas en dos filas seguidas
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

function crearTeclado() { // Crea el teclado de juego
  for (let i = 0; i < letras.length; i++) {
    let linea = document.createElement("div"); // Creamos una etiqueta div
    for (let j = 0; j < letras[i].length; j++) {
      let tecla = document.createElement("button"); // Creamos un botón
      tecla.classList.add("tecla"); // Agregamos la clase "tecla" al botón que hemos creado
      tecla.innerText = letras[i][j]; // Agregamos el texto que corresponde a la tecla que estamos creando
      if (tecla.innerText === "ENVIAR") {
        tecla.id = "Enter";
      } else if (tecla.innerText === "BORRAR") {
        tecla.id = "Backspace";
      } else {
        tecla.id = tecla.innerText;
      }
      tecla.addEventListener("click", inputTecla); 
      linea.appendChild(tecla); // Agregamos el botón que hemos creado a la etiqueta div que hemos creado
    }
    document.getElementById("teclado").appendChild(linea); // Agregamos la etiqueta div que hemos creado al elemento con el id "teclado"
  }
}

function inputFisico() { // Función que se ejecuta cuando el usuario presiona una tecla del teclado físico
  document.addEventListener("keyup", function(e) {
    inputUsuario(e);
  })
}

function inputTecla() { // Función que se ejecuta cuando el usuario presiona una tecla del teclado virtual
  let e = {key: this.id};
  inputUsuario(e);
}

function inputUsuario(e) { // Función que se ejecuta cuando el usuario hace un input, ya sea por tecla o por click
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
  } else if (e.key == "Backspace") { // Si el usuario presiona la tecla "Backspace", borramos última la letra que el usuario ha escrito
    if (columna > 0 && columna <= columnas) { // Sólo borramos letras si el usuario ha escrito al menos una letra
      columna--; // Disminuimos la columna para que el usuario pueda borrar la letra anterior
      let casillaActual = document.getElementById("casilla-" + fila + "-" + columna);
      casillaActual.innerText = ""; // Borramos la letra de la casilla actual
    }
  } else if (e.key == "Enter") { // Si el usuario presiona la tecla "Enter", comprobamos si la palabra es correcta
    if (columna === columnas) { // Sólo comprobamos la palabra si el usuario ha escrito todas las letras
      comprobarPalabra();
    }
  }

  // Si el usuario se ha quedado sin intentos, pierde
  if (fila === filas && !gameOver) {
    gameOver = true;
    mostrarFinal();
  }
}

function comprobarPalabra() { // Comprueba si la palabra que el usuario ha escrito es correcta y evaluamos el resultado
  let correctas = 0; // Variable que lleva la cuenta de el número de letras que el usuario ha acertado
  let palabraUsuario = ""; // Variable que guarda la palabra que el usuario ha escrito

  // Recorremos todas las casillas de la fila actual para obtener la palabra que el usuario ha escrito
  for (let i = 0; i < columnas; i++) {
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    palabraUsuario += casillaActual.innerText;
  }
  palabraUsuario = palabraUsuario.toLowerCase(); // Para poder comparar la palabra del usuario con la lista de palabras, convertimos el intento a minúsculas

  if (!palabras.includes(palabraUsuario)) { // Nos salimos de la función si el usuario ha escrito una palabra que no está en la lista de palabras y se lo notificamos
    // Creamos un mensaje de alerta
    const mensaje = document.createElement("div");
    mensaje.classList.add("alerta");
    mensaje.innerText = "La palabra \'" + palabraUsuario + "\' no está en la lista de palabras.";
    mensaje.style.display = "block";

    document.getElementById("container").appendChild(mensaje);

    setTimeout(() => { // Después de 5 segundos, ocultamos el mensaje automáticamente
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

  for (let i = 0; i < columnas; i++) { // Primero miramos las posiciones correctas
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    let teclaActual = document.getElementById(casillaActual.innerText);
    
    if (casillaActual.innerText === palabra[i]) {
      correctas++;
      if (!casillaActual.classList.contains("oculta")) {
        mapLetras[casillaActual.innerText]--;
        casillaActual.classList.add("correcta");
        teclaActual.classList.add("correcta");
      }
    }
    if (correctas === columnas) {
      gameOver = true;
      victoria = true;
      mostrarFinal();
    }
  }
  
  for (let i = 0; i < columnas; i++) { // En la segunda vuelta, miramos las posiciones incorrectas y nulas
    let casillaActual = document.getElementById("casilla-" + fila + "-" + i);
    let teclaActual = document.getElementById(casillaActual.innerText);

    if (!casillaActual.classList.contains("correcta") && !casillaActual.classList.contains("oculta")) { // Nos aseguramos que no estamos mirando una posición correcta ni oculta
      if (palabra.includes(casillaActual.innerText) && mapLetras[casillaActual.innerText] > 0) {
        mapLetras[casillaActual.innerText]--;
        casillaActual.classList.add("incorrecta");
        teclaActual.classList.add("incorrecta");

      } else {
        casillaActual.classList.add("nula");
        teclaActual.classList.add("nula");
      }
    }
  }
  fila++; // Aumentamos la fila para que el usuario pueda agregar la siguiente letra
  columna = 0; // Reiniciamos la columna para que el usuario pueda agregar la primera letra de la siguiente palabra
}