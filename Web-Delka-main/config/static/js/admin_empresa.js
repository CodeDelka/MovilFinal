document.addEventListener('DOMContentLoaded', function() {
    const empresasSection = document.querySelector('.empresa-section tbody');

    // Function to get and display companies
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

    // Function to display companies in the table
    function mostrarEmpresas(empresas) {
        empresasSection.innerHTML = ''; // Clear existing content

        empresas.forEach(empresa => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = empresa.id;
            row.appendChild(idCell);

            const nombreCell = document.createElement('td');
            nombreCell.textContent = empresa.nombre_empresa;
            row.appendChild(nombreCell);

            const descripcionCell = document.createElement('td');
            descripcionCell.textContent = empresa.descripcion_empresa;
            row.appendChild(descripcionCell);

            const periodoCell = document.createElement('td');
            periodoCell.textContent = empresa.periodo_activo;
            row.appendChild(periodoCell);

            const usuarioCell = document.createElement('td');
            usuarioCell.textContent = empresa.usuario;
            row.appendChild(usuarioCell);

            empresasSection.appendChild(row);
        });
    }

    // Get companies when the page loads
    obtenerYMostrarEmpresas();

    // Add event listener to the form
    document.getElementById('agregar-empresa-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const nombreEmpresa = document.getElementById('empresa-nombre').value;
        const descripcion = document.getElementById('Descripcion').value;
        const periodoActivo = document.getElementById('Periodo Activo').value;
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('Contraseña').value;

        const nuevaEmpresa = {
            nombre_empresa: nombreEmpresa,
            descripcion_empresa: descripcion,
            periodo_activo: periodoActivo,
            usuario: usuario,
            contrasena: contrasena
        };

        axios.post('/api/guardarEmpresa', nuevaEmpresa)
            .then(response => {
                const empresa = response.data;
                agregarEmpresaATabla(empresa);
                alert('Empresa agregada exitosamente');
                document.getElementById('agregar-empresa-form').reset();
            })
            .catch(error => {
                console.error('Error al agregar la empresa:', error);
                alert('Hubo un error al agregar la empresa.');
            });
    });

    // Function to add a new company to the table
    function agregarEmpresaATabla(empresa) {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = empresa.id;
        row.appendChild(idCell);

        const nombreCell = document.createElement('td');
        nombreCell.textContent = empresa.nombre_empresa;
        row.appendChild(nombreCell);

        const descripcionCell = document.createElement('td');
        descripcionCell.textContent = empresa.descripcion_empresa;
        row.appendChild(descripcionCell);

        const periodoCell = document.createElement('td');
        periodoCell.textContent = empresa.periodo_activo;
        row.appendChild(periodoCell);

        const usuarioCell = document.createElement('td');
        usuarioCell.textContent = empresa.usuario;
        row.appendChild(usuarioCell);

        empresasSection.appendChild(row);
    }
});
