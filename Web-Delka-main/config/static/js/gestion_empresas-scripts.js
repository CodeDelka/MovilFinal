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
        empresasSection.innerHTML = '<h2>Empresas</h2>'; // Limpiar el contenido existente y añadir el título

        empresas.forEach(empresa => {
            const empresaDiv = document.createElement('div');
            empresaDiv.classList.add('empresa');

            const nombreEmpresa = document.createElement('h3');
            nombreEmpresa.textContent = empresa.nombre_empresa; // Ajustado según la estructura de datos recibida
            empresaDiv.appendChild(nombreEmpresa);

            const modulosEmpresa = document.createElement('p');
            modulosEmpresa.textContent = `Módulos: ${empresa.modulos ? empresa.modulos.join(', ') : 'N/A'}`; // Ajustado según la estructura de datos recibida
            empresaDiv.appendChild(modulosEmpresa);

            empresasSection.appendChild(empresaDiv);
        });
    }

    // Llamar a la función para obtener y mostrar las empresas al cargar la página
    obtenerYMostrarEmpresas();
});
