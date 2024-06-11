document.addEventListener('DOMContentLoaded', function() {
    const empresasSection = document.getElementById('empresas-section');

    function obtenerYMostrarEmpresas() {
        axios.get('/api/getEmpresas')
            .then(response => {
                const dataEmpresas = response.data;
                mostrarEmpresas(dataEmpresas);
            })
            .catch(error => {
                console.error('Error al obtener las empresas:', error);
                alert('Hubo un error al obtener las empresas.');
            });
    }

    function mostrarEmpresas(empresas) {
        empresasSection.innerHTML = ''; // Limpiar el contenido existente

        empresas.forEach(empresa => {
            const empresaDiv = document.createElement('div');
            empresaDiv.classList.add('empresa');

            const nombreEmpresa = document.createElement('h3');
            nombreEmpresa.textContent = empresa.nombre; // Ajustado según la estructura de datos recibida
            empresaDiv.appendChild(nombreEmpresa);

            const modulosEmpresa = document.createElement('p');
            modulosEmpresa.textContent = `Módulos: ${empresa.modulos.join(', ')}`; // Ajustado según la estructura de datos recibida
            empresaDiv.appendChild(modulosEmpresa);

            empresasSection.appendChild(empresaDiv);
        });
    }

    // Manejo del evento click para cerrar sesión
    document.getElementById('cerrar-sesion-btn').addEventListener('click', function() {
        cerrarSesion();
    });

    obtenerYMostrarEmpresas();

    function cerrarSesion() {
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        window.location.href = '/';
    }
});
