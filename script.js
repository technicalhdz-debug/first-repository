
// 1. Seleccionamos nuestros elementos HTML

const botonPrincipal = document.querySelector("#btn-primary");
const botonSecundario = document.querySelector("#btn-secondary");
const botonPeligro = document.querySelector("#btn-danger");

const mensaje = document.querySelector("#mensaje");


// 2. Programamos el primer botón

botonPrincipal.addEventListener("click", function() {
    alert("¡Hola, programador! Ya estoy funcionando.");
});


// 3. Programamos el segundo botón

botonSecundario.addEventListener("click", function() {
    mensaje.textContent = "¡Acabas de modificar este texto con JavaScript!";
});


// 4. Programamos el botón de peligro

botonPeligro.addEventListener("click", function() {
    alert("¡ADVERTENCIA! Has presionado el botón de peligro.");
});
