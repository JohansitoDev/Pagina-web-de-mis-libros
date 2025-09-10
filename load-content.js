document.addEventListener('DOMContentLoaded', function() {
   
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
            }
        })
        .catch(error => console.error('Error al cargar el encabezado:', error));

 
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = html;
            }
        })
        .catch(error => console.error('Error al cargar el pie de página:', error));
});