//Ejercicio 27
¿Cuál es la diferencia entre let, const y var?

¿Cuándo usarías let?
¿Cuándo usarías const?
¿Por qué actualmente se recomienda evitar var?
- Let lo utilizamos cuando la variable puede cambiar y su ejecucion se restringe al scope de la funcion
- Const se usa cuando el valor de la variable no va a cambiar
- se recomienda evitar el uso de var ya que, una variable declarada fuera de una funcion, se toma como global, ademas de que son procesadas antes de la ejecucion del codigo, pudiendo con esto, conllevar a errores en diversos casos

//Ejercicio 28
 Analizar este código:
let nombre = "Global";

function mostrarNombre() {
 let nombre = "Local";
 console.log(nombre);
}

mostrarNombre();
console.log(nombre);

¿Qué se muestra primero?
¿Qué se muestra después?
¿Por qué?
- El scope es el espacio donde una variable es guardada, siendo esto muy importante, ya que será la prioridad que le de el motor a la hora de mostrar u ocupar datos
- primero se mostrará "local" ya que está declarada dentro de la funcion y el motor, al llamar a la variable, la encuentra primero, dandole este valor, luego, en el segundo mostrarNombre, el motor mostrará "global" ya que no puede acceder a lo que se menciona en la funcion, por lo que tomará la primera variable.

//Ejercicio 29
 ¿Cuándo conviene usar un array y cuándo conviene usar un objeto?
- conviene usar arrays cuando se deben ordenar datos similares en donde importa la posicion de cada uno, por ejemplo, en videojuegos, el orden de los objetos en un inventario.
- los objetos son utiles cuando se deben guardar diferentes datos de forma detallada en relacion a una variable en especifico, como por ejemplo, los datos de las estadisticas de un personaje

ej:
const inventario = ["espada", "poción", "llave"];

const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};

//Ejercicio 30

Pregunta:
 ¿Qué es un evento en JavaScript?

Consigna:
 Analizar este código:

boton.addEventListener("click", function () {
 console.log("El usuario hizo clic");
});

¿Qué elemento escucha el evento?
¿Qué evento se está escuchando?
¿Qué acción se ejecuta?
¿Dónde podríamos aplicar esto en una página web o videojuego?

Respuesta:
- Un evento en JavaScript es una acción que ocurre en el navegador, como un clic del mouse, presionar una tecla, cargar la página, etc. El motor puede "escuchar" estos eventos y ejecutar código en respuesta.

- El elemento que escucha el evento es "boton"

- El evento que se está escuchando es "click"

- La acción que se ejecuta es la función que imprime "El usuario hizo clic" en la consola

- Podríamos aplicar esto en una página web para manejar interacciones del usuario, como navegar entre secciones, introducir datos, etc. En un videojuego, se podría usar para acciones como iniciar el juego, pausar, mover personajes, o disparar
