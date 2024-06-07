document.addEventListener('DOMContentLoaded', function() {
    const empresasSection = document.getElementById('empresas-section');

    // Datos simulados de empresas
    const empresas = [
        { nombre: 'Empresa A', modulos: ['Ventas', 'Inventario', 'Contabilidad'] },
        { nombre: 'Empresa B', modulos: ['Contabilidad'] }
        // Agrega más empresas aquí si es necesario
    ];

    // Función para generar el HTML de las empresas
    function generarHTMLDeEmpresas() {
        empresasSection.innerHTML = ''; // Limpiar el contenido existente

        empresas.forEach(empresa => {
            const empresaDiv = document.createElement('div');
            empresaDiv.classList.add('empresa');

            const nombreEmpresa = document.createElement('h3');
            nombreEmpresa.textContent = empresa.nombre;
            empresaDiv.appendChild(nombreEmpresa);

            const listaModulos = document.createElement('ul');
            empresa.modulos.forEach(modulo => {
                const moduloLi = document.createElement('li');
                moduloLi.textContent = modulo;
                listaModulos.appendChild(moduloLi);
            });
            empresaDiv.appendChild(listaModulos);

            empresasSection.appendChild(empresaDiv);
        });
    }

    // Llama a la función para generar el HTML de las empresas
    generarHTMLDeEmpresas();

    // Manejo del evento click para cerrar sesión
    document.getElementById('cerrar-sesion-btn').addEventListener('click', function() {
        cerrarSesion();
    });

    function cerrarSesion() {
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        window.location.href = '/';
    }
});
