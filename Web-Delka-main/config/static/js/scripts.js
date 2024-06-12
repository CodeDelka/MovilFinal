document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signupForm');
    const errorMessage = document.getElementById('error-message');

    if (form && errorMessage) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            if (username === '' || password === '' || role === '') {
                errorMessage.textContent = 'Todos los campos son obligatorios.';
                errorMessage.style.display = 'block';
                return;
            } 

            if (username === 'admin' && password === 'admin123' && role === 'admin') {
                alert(`Bienvenido, ${username}`);
                console.log("administrador");
                window.location.href = '/menu_principal';
            } else if (username !== 'admin' && password !== 'admin123' && role === 'admin') {
                alert('Role: admin');
                console.log(role);
            } else if (role === 'user') {
                axios.post('/api/login', {
                    usuario: username,
                    contrasena: password
                })
                .then(response => {
                    const data = response.data;
                    errorMessage.style.display = 'none';
                    alert(`Bienvenido`);
                    window.location.href = '/perfil';
                })
                .catch(error => {
                    if (error.response) {
                        alert("El usuario no se encuentra registrado en la bd");
                    } else {
                        alert(`Error al conectar con el servidor.`);
                    }
                    errorMessage.style.display = 'block';
                });
            } else {
                errorMessage.textContent = 'Credenciales incorrectas o rol no válido.';
                errorMessage.style.display = 'block';
            }
        });
    } else {
        console.error('Elementos del formulario no encontrados.');
    }
});
