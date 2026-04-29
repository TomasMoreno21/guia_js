console.log("Guía JavaScript iniciada");
// Ejercicio 1
let nombre = "Tomás";
let edad = 19;
let vida = 100;
let puntaje = 0;
let activo = true;

console.log("los datos del jugador son: " + nombre + ", " + edad + ", " + vida + ", " + puntaje + ", " + activo);

//Ejercicio 2
let puntosbase = 100;
let bonus = 50;
let penalizacion = 20;
let puntosfinales = puntosbase + bonus - penalizacion;
console.log("los puntos finales son: " + puntosfinales);

//Ejercicio 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
 const numero = Number(valor)
 const suma = numero + 10;
 mensaje.textContent = suma;
});

//ejercicio 4
if (edad >= 13) {
  console.log("puede jugar");
} else {
  console.log("no puede jugar todavia");
}

//Ejercicio 5
if (vida <= 0) {
  console.log("Game Over");
} else if (vida >= 1 && vida <= 29) {
  console.log("jugador en peligro");
} else if (vida >= 30 && vida <= 70) {
  console.log("jugador herido");
} else {
  console.log("jugador en buen estado");
}

//ejercicio 6
let opcion = "iniciar";

switch (opcion) {
 case "iniciar":
  console.log ("inicia el juego");
  break;
 case "configuracion":
  console.log ("Menu de configuraciones");
  break;
 case "créditos":
  console.log ("créditos")
  break;
 case "salir":
  console.log ("salir del juego")
  break;

}
// Ejercicio 7
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Ejercicio 8
const puntosPorRonda = [15, 25, 10, 30]; // Puntos diferentes para cada ronda
let puntajeTotal = 0;

for (let i = 0; i < puntosPorRonda.length; i++) {
  puntajeTotal += puntosPorRonda[i];
}

console.log("la puntuación total es: " + puntajeTotal);



//Ejercicio 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];
console.log("el segundo elemento del inventario es: " + inventario[1]);
console.log("el último elemento del inventario es: " + inventario[4]);
console.log("la longitud del inventario es: " + inventario.length);

//Ejercicio 10
const inventario2 = ["espada", "poción", "llave", "escudo"];
for (let i = 0; i < inventario2.length; i++) {
  console.log("el elemento " + (i + 1) + " del inventario es: " + inventario2[i]);
}

//Ejercicio 11
let mochila = [];
mochila.push("Linterna");
mochila.push("Comida");
mochila.push("Mapa");

mochila.pop();

console.log(mochila);

//Ejercicio 12
let inventario3 = [];
if (inventario3.includes("llave")) {
  console.log("la puerta se abre");
} else {
  console.log("necesitas una llave");
}

//Ejercicio 13
function saludarUsuario(nombre) {
  console.log("Hola, " + nombre);
}

saludarUsuario("Tomás");

//Ejercicio 14
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

//Ejercicio 15
const sumar = (a, b) => {
 return a + b;
};

console.log(sumar(10, 5));

//Ejercicio 16
const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};
console.log(jugador.nombre, jugador.vida, jugador.energia, jugador.nivel, jugador.inventario);

//Ejercicio 17
const jugador2 = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};
function subirnivel(jugador2) {
  jugador2.nivel += 1;
  jugador2.monedas += 50;
}
subirnivel(jugador2);
console.log(jugador2);

//Ejercicio 18
const jugadores = [
 { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
 { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
 { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];
console.log("el jugador " + jugadores[0].nombre + " es de nivel " + jugadores[0].nivel);

//Ejercicio 19
const personajesFuertes = personajes.filter((jugadores) => {
  return jugadores.nivel >= 3;
});
console.log("los personajes fuertes son: " + personajesFuertes);

//Ejercicio 20
const nombres = personajes.map((jugadores) => {
  return jugadores.nombre;
});
console.log("los nombres de los jugadores son: " + nombres);

//ejercicio 21
const personajeEncontrado = personajes.find((jugadores) => {
  return jugadores.nombre === "Kai";
});

console.log("el personaje encontrado es: " + personajeEncontrado);

//Ejercicio 22
const vidatotal = personajes.reduce((acumulador, jugadores) => {
  return acumulador + jugadores.vida;
}, 0);

console.log("la vida total de todos los jugadores es: " + vidatotal);

//Ejercicio 23
const mensajeElement = document.getElementById("mensaje");

mensajeElement.textContent = "Bienvenido a la guía de JavaScript";
mensajeElement.style.color = "red";

//Ejercicio 24
const boton24 = document.getElementById("btn");
const mensaje24 = document.getElementById("mensaje");

let puntos = 0;

boton24.addEventListener("click", function () {
  puntos+= 10;
  mensaje24.textContent = "Puntos: " + puntos;
});

//Ejercicio 25
const input25 = document.getElementById("dato");
const boton25 = document.getElementById("btn");
const mensaje25 = document.getElementById("mensaje");

boton25.addEventListener("click", function () {
  if (input25.value === "") {
    mensaje25.textContent = "ingrese su nombre";
  } else {
    mensaje25.textContent = "bienvenido: " + input25.value;
  }
});

//Ejercicio 26
const jugador4 = {
 nombre: "Luna",
 puntaje: 1500
};

localStorage.setItem("datosjugador", JSON.stringify(jugador4));

const datosGuardados = localStorage.getItem("datosjugador");
const jugadorRecuperado = JSON.parse(datosGuardados);

console.log(jugadorRecuperado);