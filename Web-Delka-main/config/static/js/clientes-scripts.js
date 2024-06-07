document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cliente-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores de los campos del formulario
        const nit = document.getElementById('nit').value;
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;

        // Validar los campos (esto es solo un ejemplo simple)
        if (nit === '' || nombre === '' || direccion === '' || telefono === '' || correo === '') {
            alert('Todos los campos son obligatorios.');
        } else {
            // Aquí puedes agregar la lógica para enviar los datos al servidor o almacenarlos
            alert('Cliente agregado/modificado exitosamente.');
            form.reset(); // Limpiar el formulario después de enviarlo
        }
    });
});

function cerrarSesion() {
    // Lógica para cerrar sesión y redirigir al menú principal
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    // Redirigir al menú principal (cambia la URL al menú principal)
    window.location.href = '/';  // Cambia 'index.html' por la URL de tu menú principal
}

