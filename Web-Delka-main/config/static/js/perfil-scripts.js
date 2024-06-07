// Función para cerrar sesión
function cerrarSesion() {
    // Mostrar un mensaje de confirmación antes de cerrar la sesión
    if (confirm('¿Estás seguro de que deseas cerrar la sesión?')) {
        // Si el usuario confirma, redirigir al menú principal
        redirigirAlMenuPrincipal();
    }
}

// Función para redirigir al menú principal
function redirigirAlMenuPrincipal() {
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    window.location.href = '/';
}

// Agregar un controlador de eventos al botón de cerrar sesión cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    var cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener('click', cerrarSesion);
    } else {
        console.error('El botón de cerrar sesión no se ha encontrado.');
    }
});
