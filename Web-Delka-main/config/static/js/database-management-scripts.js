document.addEventListener('DOMContentLoaded', () => {
    const companySelect = document.getElementById('id');
    const databaseForm = document.getElementById('bdtest');
    const databaseList = document.getElementById('bdtest-list');
    const logoutBtn = document.getElementById('logout-btn');

    // Cargar las empresas en el select al cargar la página
    axios.get('/api/getEmpresas')
        .then(response => {
            const empresas = response.data;
            empresas.forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa.id;
                option.textContent = empresa.nombre_empresa;
                companySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener las empresas:', error);
            alert(error);
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
                li.textContent = database.nombre_empresa;
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

    // Manejar el cierre de sesión
    logoutBtn.addEventListener('click', () => {
        axios.post('/api/logout')
            .then(() => {
                window.location.href = '/';
            })
            .catch(error => {
                console.error('Error al cerrar sesión:', error);
                alert('Hubo un error al cerrar sesión.');
            });
    });
});
