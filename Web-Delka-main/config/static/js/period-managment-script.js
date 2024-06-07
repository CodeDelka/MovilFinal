document.addEventListener('DOMContentLoaded', () => {
    const companySelect = document.getElementById('company-name'); 

    axios.get('/api/getEmpresas')
        .then(response => {
            const empresas = response.data;

            if (Array.isArray(empresas)) {
                empresas.forEach(empresa => {
                    const option = document.createElement('option');
                    option.textContent = empresa.nombre_empresa;  
                    companySelect.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.textContent = empresas.nombre_empresa;
                companySelect.appendChild(option);
            }
        })
        .catch(error => {
            console.error('Error fetching company names:', error);
            alert(error);
        });
});
