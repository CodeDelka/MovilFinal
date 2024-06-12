document.addEventListener("DOMContentLoaded", function() {
    const agregarProductoForm = document.getElementById("agregar-producto-form");

    agregarProductoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
       
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio_unitario = parseFloat(document.getElementById("precio_unitario").value);
        const cantidad = parseInt(document.getElementById("cantidad").value);
        const cantidad_minima_exis = parseInt(document.getElementById("cantidad_minima_exis").value);

       
        const data = {
            nombre: nombre,
            descripcion: descripcion,
            precio_unitario: precio_unitario,
            cantidad: cantidad,
            cantidad_minima_exis: cantidad_minima_exis
        };

        
        axios.post('/api/guardarProducto', data, {
            
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            alert('Producto agregado exitosamente');
           
            agregarProductoForm.reset();
          
            mostrarProductos();
        })
        .catch(function(error) {
            console.error('Error al agregar el producto:', error);
        });
    });

    
    function mostrarProductos() {
        axios.get('/api/productos')
            .then(function(response) {
                console.log('Respuesta del servidor:', response);
                const productos = response.data;
                console.log('Productos:', productos);
                const tablaProductosBody = document.getElementById('tabla-productos-body');
                tablaProductosBody.innerHTML = ''; 
    
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

    
    mostrarProductos();
});
