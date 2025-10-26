console.log("¡Hola desde JavaScript!");

// Seleccionar elementos por ID
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const botonColor = document.getElementById("botonColor");
const botonTexto = document.getElementById("botonTexto");
const entrada = document.getElementById("entrada");
const saludo = document.getElementById("saludo");

// Paso 5: Cambiar texto inicial
titulo.textContent = "¡Bienvenido al mundo del DOM!";
descripcion.style.color = "gray";

// Variable para el contador
let contador = 0;

// PASOS 6 y 3. Combinar el cambio de color y el contador en UN solo evento de clic
botonColor.addEventListener("click", () => {
    // 1. Cambiar color aleatorio
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = color;

    // 2. Incrementar y mostrar contador
    contador++;
    console.log(`Has hecho clic ${contador} veces`);
});

// Paso 7: Cambiar texto con otro botón
botonTexto.addEventListener("click", () => {
    titulo.textContent = "¡El texto ha cambiado gracias a tu clic!";
});

// Paso 8: Escuchar lo que el usuario escribe
entrada.addEventListener("input", () => {
    const nombre = entrada.value;
    saludo.textContent = `Hola, ${nombre}! 👋`;
});

// Paso 1 (extra): Crear y agregar el tercer botón
const botonTamaño = document.createElement("button");
botonTamaño.textContent = "Aumentar tamaño del texto";
document.body.appendChild(botonTamaño);

// Paso 1 (extra): Evento para cambiar tamaño del texto
botonTamaño.addEventListener("click", () => {
    titulo.style.fontSize = "2.5rem";
});

// Paso 2 (extra): Evento doble clic para el título
titulo.addEventListener("dblclick", () => {
    titulo.style.color = "purple";
});
