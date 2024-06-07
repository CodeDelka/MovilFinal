document.addEventListener('DOMContentLoaded', function() {
    // Función para generar informes
    function generarInforme(tipo) {
        const resultadoInforme = document.getElementById('resultado-informe');
        resultadoInforme.innerHTML = `Generando informe de ${tipo}...`;

        // Simulación de generación de informe (reemplaza esto con tu lógica real)
        setTimeout(function() {
            let informe;
            switch (tipo) {
                case 'ventas':
                    informe = "Informe de ventas: Total de ventas del mes: $10,000";
                    break;
                case 'facturas':
                    informe = "Factura generada: Número de factura: 001, Monto: $100";
                    break;
                case 'clientes':
                    informe = "Informe de clientes: Total de clientes registrados: 50";
                    break;
                default:
                    informe = "Tipo de informe no reconocido";
            }

            resultadoInforme.innerHTML = informe;
        }, 2000); // Simulamos una generación de informe que toma 2 segundos
    }

    // Event listeners para los botones de generar informes
    document.getElementById('ventas-btn').addEventListener('click', function() {
        generarInforme('ventas');
    });

    document.getElementById('facturas-btn').addEventListener('click', function() {
        generarInforme('facturas');
    });

    document.getElementById('clientes-btn').addEventListener('click', function() {
        generarInforme('clientes');
    });

    // Manejo del evento click para cerrar sesión
    document.getElementById('cerrar-sesion-btn').addEventListener('click', function() {
        cerrarSesion();
    });

    function cerrarSesion() {
        alert('Sesión cerrada. Redirigiendo al menú principal...');
        window.location.href = '/';
    }
});
