document.addEventListener('DOMContentLoaded', function() {
    const empresasSection = document.querySelector('.empresa-section');

    function obtenerYMostrarEmpresas() {
        axios.get('/api/getEmpresas')
            .then(response => {
                const empresas = response.data;
                mostrarEmpresas(empresas);
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
            nombreEmpresa.textContent = empresa.nombre_empresa;
            empresaDiv.appendChild(nombreEmpresa);

            const descripcionEmpresa = document.createElement('p');
            descripcionEmpresa.textContent = empresa.descripcion_empresa;
            empresaDiv.appendChild(descripcionEmpresa);

            empresasSection.appendChild(empresaDiv);
        });
    }

    obtenerYMostrarEmpresas();

    document.getElementById('cerrar-sesion-btn').addEventListener('click', function() {
        cerrarSesion();
    });

    function cerrarSesion() {
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        window.location.href = '/';
    }
});
