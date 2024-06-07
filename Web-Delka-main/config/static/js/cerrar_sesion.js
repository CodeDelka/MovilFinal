// Función para cerrar la sesión del usuario
function cerrarSesion() {
    // Mostrar un mensaje de confirmación
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        // Si el usuario confirma, redirigir al menú principal
        redirigirAlMenuPrincipal();
    }
}

// Función para redirigir al menú principal
function redirigirAlMenuPrincipal() {
    // Mostrar un mensaje de despedida
    alert('Sesión cerrada. Redirigiendo al menú principal...');

    // Redirigir al menú principal (cambiar la URL según sea necesario)
    window.location.href = '/';
}

// Asociar la función cerrarSesion al evento click del botón
document.addEventListener('DOMContentLoaded', function() {
    var botonCerrarSesion = document.querySelector('#cerrar-sesion');
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', cerrarSesion);
    }
});
