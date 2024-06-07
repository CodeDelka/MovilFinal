document.addEventListener("DOMContentLoaded", function() {
    const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn");
  
    cerrarSesionBtn.addEventListener("click", function() {
      cerrarSesion();
    });
  
    function cerrarSesion() {
      // Simular una solicitud al servidor para cerrar la sesión
      
      // Mostrar un mensaje de confirmación
      if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        // Lógica para cerrar sesión y redirigir al menú principal
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        // Redirigir al menú principal (cambia la URL al menú principal)
        window.location.href = '/';  
      } else {
        // Si el usuario cancela, no se realiza ninguna acción
        return;
      }
    }
  });
  