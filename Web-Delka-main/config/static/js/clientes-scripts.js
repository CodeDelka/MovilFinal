document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cliente-form');
    const clientesList = document.getElementById('clientes-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const identificacion = document.getElementById('identificacion').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;

        // Validar los campos (esto es solo un ejemplo simple)
        if (nombre === '' || identificacion === '' || direccion === '' || telefono === '' || correo === '') {
            alert('Todos los campos son obligatorios.');
        } else {
            // Enviar los datos al servidor
            axios.post('api/guardarCliente', {
                nombre: nombre,
                identificacion: identificacion,
                direccion: direccion,
                telefono: telefono,
                correo: correo
            })
            .then(response => {
                alert('Cliente agregado exitosamente.');
                form.reset(); // Limpiar el formulario después de enviarlo
                agregarClienteALista(response.data); // Agregar el cliente a la lista
            })
            .catch(error => {
                console.error('Error al agregar cliente:', error);
                alert('Hubo un error al agregar el cliente.');
            });
        }
    });

    function agregarClienteALista(cliente) {
        const li = document.createElement('li');
        li.textContent = `${cliente.nombre} - ${cliente.identificacion}`;
        clientesList.appendChild(li);
    }
});

function cerrarSesion() {
    // Lógica para cerrar sesión y redirigir al menú principal
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    // Redirigir al menú principal (cambia la URL al menú principal)
    window.location.href = '/';  // Cambia '/' por la URL de tu menú principal
}

