document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById('logout-btn');
    const createCompanyForm = document.getElementById('create-company-form');
  
    // Función para cerrar sesión
    function cerrarSesion() {
      alert('Sesión cerrada. Redirigiendo al menú principal...');
      window.location.href = '/';  
    }
  
    // Función para manejar la creación de la empresa
    function handleCreateCompany(event) {
      event.preventDefault();
      const companyName = document.getElementById('company-name').value;
      const modules = Array.from(document.getElementById('modules').selectedOptions).map(option => option.value);
  
      if (companyName && modules.length > 0) {
        // Aquí puedes agregar la lógica para enviar estos datos al servidor
        alert(`Empresa ${companyName} creada con los módulos: ${modules.join(', ')}`);
        // Restablecer el formulario
        createCompanyForm.reset();
      } else {
        alert('Por favor, complete todos los campos.');
      }
    }
  
    // Asignar eventos
    logoutBtn.addEventListener('click', cerrarSesion);
    createCompanyForm.addEventListener('submit', handleCreateCompany);
  });
  