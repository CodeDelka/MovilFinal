// Función para cerrar sesión
function cerrarSesion() {
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    window.location.href = '/'; 
}

document.addEventListener('DOMContentLoaded', function() {
    // Selección del formulario
    const parametrosForm = document.getElementById('parametros-form');

    // Escucha del evento submit del formulario
    parametrosForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario

        // Obtener los valores de los campos de entrada
        const ganancia = document.getElementById('ganancia').value;
        const iva = document.getElementById('iva').value;

        // Validación de los valores ingresados
        if (ganancia === '' || iva === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Envío de los datos del formulario (simulado)
        enviarDatos(ganancia, iva);
    });

    // Función para enviar los datos del formulario (simulación)
    function enviarDatos(ganancia, iva) {
        // Aquí se simula el envío de datos al servidor
        alert(`Datos enviados al servidor:\nPorcentaje de Ganancia: ${ganancia}\nPorcentaje de IVA: ${iva}`);
        // Puedes agregar aquí la lógica real para enviar los datos al servidor
    }
});
