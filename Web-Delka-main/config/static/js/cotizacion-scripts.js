document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cotizacion-form');
    const cotizacionesList = document.getElementById('cotizaciones-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores de los campos del formulario
        const cliente = document.getElementById('cliente').value;
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;

        // Validar los campos (esto es solo un ejemplo simple)
        if (cliente === '' || producto === '' || cantidad === '') {
            alert('Todos los campos son obligatorios.');
        } else {
            // Añadir la nueva cotización a la lista de cotizaciones recientes
            const cotizacionItem = document.createElement('li');
            cotizacionItem.textContent = `Cliente: ${cliente}, Producto: ${producto}, Cantidad: ${cantidad}`;
            cotizacionesList.appendChild(cotizacionItem);

            alert('Cotización agregada exitosamente.');
            form.reset(); // Limpiar el formulario después de enviarlo
        }
    });
});

function cerrarSesion() {
    // Lógica para cerrar sesión y redirigir al menú principal
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    // Redirigir al menú principal (cambia la URL al menú principal)
    window.location.href = '/';  // 
}
