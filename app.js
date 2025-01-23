// Obtener elementos del DOM
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar los amigos
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Obtener el valor del input

    // Validacion de campo
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el amigo no se repita
    const amigosEnLista = Array.from(listaAmigos.children).map(item => item.textContent);
    if (amigosEnLista.includes(nombre)) {
        alert(`El nombre '${nombre}' ya está en la lista. Agrega otro amigo.`);
        return;
    }

    // crear lista de amigos
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;

    // Añadir el nuevo amigo a la lista
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el campo de texto
    inputNombre.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaAmigos.children.length === 0) {
        alert("Primero agrega algunos amigos a la lista.");
        return;
    }

    // Convertir la lista de amigos en un array y seleccionar uno al azar
    const amigos = Array.from(listaAmigos.children);
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    // Mostrar el amigo sorteado
    resultado.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
}

// Agregar evento para presionar "Enter" y ejecutar la función de añadir
inputNombre.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
