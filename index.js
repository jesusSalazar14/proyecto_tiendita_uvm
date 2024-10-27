/* HEADER PRINCIPAL*/

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.querySelector('.search-input');
    const announcementBarContent = document.querySelector('.announcement-bar-content');

    searchButton.addEventListener('click', function() {
        searchInput.classList.toggle('active'); 
        
        // Alterna la visibilidad de los demás elementos
        if (searchInput.classList.contains('active')) {
            // Si la barra de búsqueda está activa, oculta los demás elementos
            announcementBarContent.querySelectorAll('.button-header:not(#search-button)').forEach(button => {
                button.classList.add('hidden');
            });
        } else {
            // Si la barra de búsqueda no está activa, muestra los demás elementos
            announcementBarContent.querySelectorAll('.button-header:not(#search-button)').forEach(button => {
                button.classList.remove('hidden');
            });
        }
    });
});




/* HEADER SECUNDARIO*/

document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');

    // Cambiar el estilo de display del menú
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'; 
    } else {
        menu.style.display = 'flex'; 
    }
});


window.addEventListener('load', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth < 600) {
        menu.style.display = 'none'; 
    }
});


window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth >= 600) {
        menu.style.display = 'flex'; 
    } else {
        menu.style.display = 'none'; 
    }
});




/* CARRUSEL */

const content = document.querySelector(".scroll-container");
let scrollSpeed = 2000; // Velocidad de desplazamiento 
let scrollAmount = 400; // Cantidad de desplazamiento en cada intervalo
let direction = 1; 
let isScrolling = false; // Para controlar el estado de desplazamiento

// Función para mover el contenido
function scroll() {
    if (isScrolling) return; // Evitar que se ejecute si ya está desplazándose
    isScrolling = true;

    content.scrollLeft += scrollAmount * direction;

    // Verificar si hemos llegado al final o al inicio
    if (content.scrollLeft >= content.scrollWidth - content.clientWidth) {
        direction = -1;
    } else if (content.scrollLeft <= 0) {
        direction = 1; 
    }

    
    requestAnimationFrame(() => {
        // Usar un timeout para controlar la velocidad del desplazamiento
        setTimeout(() => {
            isScrolling = false; 
            scroll(); 
        }, scrollSpeed); 
    });
}

// Función para ajustar el scrollAmount y la velocidad según el tamaño de la ventana
function adjustScrollAmount() {
    if (window.innerWidth < 700) {
        scrollAmount = 320; 
        scrollSpeed = 3000; 
    } else {
        scrollAmount = 400; 
        scrollSpeed = 2000; 
    }
}

// Iniciar el carrusel
scroll(); 


window.addEventListener('load', adjustScrollAmount);
window.addEventListener('resize', adjustScrollAmount);