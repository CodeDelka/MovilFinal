// Función para manejar el cierre de sesión
function cerrarSesion() {
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    window.location.href = '/';  
}

// Función para manejar el envío del formulario
document.getElementById('module-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    // Obtiene los módulos seleccionados
    const selectedModules = Array.from(document.querySelectorAll('input[name="module"]:checked'))
                                 .map(input => input.value);
    console.log('Módulos seleccionados:', selectedModules);

    // Simulación de solicitud AJAX para guardar los módulos seleccionados
    setTimeout(() => {
        alert('Los cambios se han guardado correctamente.');
    }, 1000); // Simula un tiempo de espera de 1 segundo antes de mostrar el mensaje de éxito
});
