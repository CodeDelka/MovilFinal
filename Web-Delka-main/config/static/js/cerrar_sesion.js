document.addEventListener("DOMContentLoaded", function() {
    const listaStock = document.getElementById("lista-stock");

    // Función para obtener los productos y mostrarlos en la lista
    function cargarProductos() {
        axios.get('/api/productos')
            .then(function(response) {
                const productos = response.data;
                listaStock.innerHTML = ''; // Limpiar la lista antes de agregar los productos

                productos.forEach(function(producto) {
                    const li = document.createElement('li');
                    li.classList.add('stock-item');
                    
                    // Aplicar clases según la cantidad de productos en stock
                    if (producto.cantidad === 0) {
                        li.classList.add('stock-sin-existencia');
                    } else if (producto.cantidad < producto.cantidad_minima_exis) {
                        li.classList.add('stock-minimo');
                    } else {
                        li.classList.add('stock-optimo');
                    }

                    li.innerHTML = `
                        <span>${producto.nombre} - Código: ${producto.id}</span>
                        <span>Cantidad: ${producto.cantidad}</span>
                        <span>Cantidad Mínima: ${producto.cantidad_minima_exis}</span>
                    `;

                    listaStock.appendChild(li);
                });
            })
            .catch(function(error) {
                console.error('Error al obtener los productos:', error);
            });
    }

    // Llamar a la función para cargar los productos al cargar la página
    cargarProductos();

    // Función para cerrar la sesión del usuario
    function cerrarSesion() {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            redirigirAlMenuPrincipal();
        }
    }

    // Función para redirigir al menú principal
    function redirigirAlMenuPrincipal() {
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        window.location.href = '/';
    }

    // Asociar la función cerrarSesion al evento click del botón
    var botonCerrarSesion = document.querySelector('#cerrarSesionBtn');
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', cerrarSesion);
    }
});
