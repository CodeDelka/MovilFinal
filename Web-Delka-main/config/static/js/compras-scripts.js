document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('compras-form');
    const comprasList = document.getElementById('compras-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores de los campos del formulario
        const cotizacionId = document.getElementById('cotizacion-id').value;
        const clienteId = document.getElementById('cliente-id').value;
        const fechaCompra = document.getElementById('fecha-compra').value;

        // Validar los campos (esto es solo un ejemplo simple)
        if (cotizacionId === '' || clienteId === '' || fechaCompra === '') {
            alert('Todos los campos son obligatorios.');
        } else {
            // Añadir la nueva compra a la lista de compras recientes
            const compraItem = document.createElement('li');
            compraItem.textContent = `Cotización: ${cotizacionId}, Cliente: ${clienteId}, Fecha: ${fechaCompra}`;
            comprasList.appendChild(compraItem);

            alert('Compra realizada exitosamente.');
            form.reset(); // Limpiar el formulario después de enviarlo
        }
    });
});

function cerrarSesion() {
    // Lógica para cerrar sesión y redirigir al menú principal
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    // Redirigir al menú principal (cambia la URL al menú principal)
    window.location.href = '/';  
}
