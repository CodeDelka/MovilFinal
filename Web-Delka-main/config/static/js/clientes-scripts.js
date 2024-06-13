document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cliente-form');

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
                agregarClienteATabla(response.data); // Agregar el cliente a la tabla
            })
            .catch(error => {
                console.error('Error al agregar cliente:', error);
                alert('Hubo un error al agregar el cliente.');
            });
        }
    });

    function agregarClienteATabla(cliente) {
        const tbody = document.getElementById('clientes-table').querySelector('tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.identificacion}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.correo}</td>
        `;
        tbody.appendChild(row);
    }

    function cargarClientes() {
        axios.get('api/listarClientes')
        .then(response => {
            const clientes = response.data;
            const tbody = document.getElementById('clientes-table').querySelector('tbody');
            tbody.innerHTML = ''; // Limpiar la tabla antes de agregar los clientes
            clientes.forEach(cliente => {
                agregarClienteATabla(cliente);
            });
        })
        .catch(error => {
            console.error('Error al cargar clientes:', error);
        });
    }

    cargarClientes()
    agregarClienteATabla; // Cargar los clientes al cargar la página
});

function cerrarSesion() {
    // Lógica para cerrar sesión y redirigir al menú principal
    alert('Sesión cerrada. Redirigiendo al menú principal...');
    // Redirigir al menú principal (cambia la URL al menú principal)
    window.location.href = '/';  // Cambia '/' por la URL de tu menú principal
}
