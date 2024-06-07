document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();


        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        if (username === '' || password === '' || role == '') {

            errorMessage.textContent = 'Todos los campos son obligatorios.';
            errorMessage.style.display = 'block';
            alert(`Por favor revisa`);
            return;
        } else if (username == 'admin' || password == 'admin123' && role == 'Administrador') {
            alert(`Bienvenido`);
            console.log("adminsitrador");
            window.location.href = '/menu_principal';
 HEAD
            alert(`Bienvenido, ${username}`);

        }
        else if (username !== 'admin' && password !== 'admin123' && role == 'admin') {
            console.log(role)
            alert(role);
        }
        else if (username !== 'admin' || password !== 'admin123' && role == 'empresa') {
            axios.post('/api/login', {
                usuario: username,
                contrasena: password
            })
                .then(response => {

                    const data = response.data;
                    errorMessage.style.display = 'none';
                    alert(`Bienvenido`);
                    window.location.href = '/admin-empresa';
                })
                .catch(error => {

                    if (error.response) {
                        alert("El usuario no se encuentra registrado en la bd");;
                    } else {

                        alert(`Error al conectar con el servidor.`);
                    }
                    errorMessage.style.display = 'block';
                });

        }
    });
});
