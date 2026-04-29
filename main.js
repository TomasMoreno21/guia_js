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
