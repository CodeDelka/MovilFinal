// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el botón de cerrar sesión
    var cerrarSesionBtn = document.getElementById("cerrarSesionBtn");

    // Agrega un event listener al botón de cerrar sesión
    cerrarSesionBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que se ejecute el comportamiento predeterminado del enlace

        // Muestra un mensaje de confirmación
        var confirmacion = confirm("¿Estás seguro de que quieres cerrar sesión?");

        // Si el usuario confirma, redirige al menú principal
        if (confirmacion) {
            cerrarSesion();
        }
    });

    // Función para cerrar sesión
    function cerrarSesion() {
        // Simula una petición al servidor para cerrar sesión
        // Aquí podrías hacer una solicitud HTTP a tu backend para cerrar la sesión del usuario

        // Muestra un mensaje de confirmación
        alert('Sesión cerrada. Redirigiendo al menú principal...');

        // Redirige al menú principal (cambia la URL al menú principal)
        window.location.href = '/';  
    }
});
