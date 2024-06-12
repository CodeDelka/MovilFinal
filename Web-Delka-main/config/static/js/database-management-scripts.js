document.addEventListener('DOMContentLoaded', () => {
    const empresaTableBody = document.querySelector('#empresa-table tbody');
    const databaseForm = document.getElementById('bdtest');
    const databaseList = document.getElementById('bdtest-list');

    // Cargar las empresas en la tabla al cargar la página
    axios.get('/api/getEmpresas')
        .then(response => {
            const empresas = response.data;
            empresas.forEach(empresa => {
                const row = empresaTableBody.insertRow();
                row.insertCell(0).textContent = empresa.id;
                row.insertCell(1).textContent = empresa.nombre_empresa;
                row.insertCell(2).textContent = empresa.descripcion_empresa;
                row.insertCell(3).textContent = empresa.periodo_activo;
                row.insertCell(4).textContent = empresa.usuario;
                row.insertCell(5).textContent = empresa.contrasena;
            });
        })
        .catch(error => {
            console.error('Error al obtener las empresas:', error);
            alert('Hubo un error al cargar las empresas.');
        });

    // Manejar el envío del formulario para crear una nueva base de datos
    databaseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const companyId = companySelect.value;
        const databaseName = document.getElementById('bdtest').value;

        axios.post('/api/crear_bd', {
            empresa_id: companyId,
            nombre_bd: databaseName
        })
        .then(response => {
            alert('Base de datos creada exitosamente.');
            databaseForm.reset();
            loadDatabases();
        })
        .catch(error => {
            console.error('Error al crear la base de datos:', error);
            alert('Hubo un error al crear la base de datos.');
        });
    });

    // Cargar la lista de bases de datos existentes
    function loadDatabases() {
        axios.get('/api/getEmpresas')
        .then(response => {
            const databases = response.data;
            databaseList.innerHTML = '';
            databases.forEach(database => {
                const li = document.createElement('li');
                li.textContent = database.nombre_bd;
                databaseList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al cargar las bases de datos:', error);
            alert('Hubo un error al cargar las bases de datos.');
        });
    }

    // Llamar a la función para cargar las bases de datos existentes al cargar la página
    loadDatabases();
});
