document.addEventListener("DOMContentLoaded", function() {
    const agregarProductoForm = document.getElementById("agregar-producto-form");

    agregarProductoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Obtener los datos del formulario
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio_unitario = parseFloat(document.getElementById("precio_unitario").value);
        const cantidad = parseInt(document.getElementById("cantidad").value);
        const cantidad_minima_exis = parseInt(document.getElementById("cantidad_minima_exis").value);

        // Crear un objeto con los datos del producto
        const data = {
            nombre: nombre,
            descripcion: descripcion,
            precio_unitario: precio_unitario,
            cantidad: cantidad,
            cantidad_minima_exis: cantidad_minima_exis
        };

        // Enviar una solicitud POST al backend para guardar el producto
        axios.post('/guardarProducto', data)
            .then(function(response) {
                alert('Producto agregado exitosamente');
                // Limpiar el formulario después de agregar el producto
                agregarProductoForm.reset();
                // Actualizar la lista de productos
                mostrarProductos();
            })
            .catch(function(error) {
                console.error('Error al agregar el producto:', error);
            });
    });

    // Función para mostrar los productos
    function mostrarProductos() {
        axios.get('/productos')
            .then(function(response) {
                console.log('Respuesta del servidor:', response);
                const productos = response.data;
                console.log('Productos:', productos);
                const tablaProductosBody = document.getElementById('tabla-productos-body');
                tablaProductosBody.innerHTML = ''; // Limpiar la tabla antes de agregar los nuevos productos
    
                productos.forEach(function(producto) {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `

                        <td>${producto.nombre}</td>
                        <td>${producto.descripcion}</td>
                        <td>${producto.precio_unitario}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.cantidad_minima_exis}</td>
                    `;
                    tablaProductosBody.appendChild(fila);
                });
            })
            .catch(function(error) {
                console.error('Error al obtener los productos:', error);
            });
    }

    // Llamar a la función para mostrar los productos al cargar la página
    mostrarProductos();
});
