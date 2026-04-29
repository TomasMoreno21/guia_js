console.log("Guía JavaScript iniciada");
// Ejercicio 1
let nombre = "Tomás";
let edad = 19;
let vida = 50;
let puntaje = 0;
let activo = true;

console.log(nombre, edad, vida, puntaje, activo);

//Ejercicio 2
let puntosbase = 100;
let bonus = 50;
let penalizacion = 20;
let puntosfinales = puntosbase + bonus - penalizacion;
console.log(puntosfinales);

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
if (vida === 0) {
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
let puntajeTotal = 0;

for (let ronda = 1; ronda < 5; ronda++) {
 puntajeTotal += ronda + 10;
}

console.log(puntajeTotal);

//Ejercicio 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];
console.log(inventario[1]);
console.log(inventario[4]);
console.log(inventario.length);

//Ejercicio 10
const inventario2 = ["espada", "poción", "llave", "escudo"];
for (let i = 0; i < inventario2.length; i++) {
  console.log(inventario2[i]);
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

