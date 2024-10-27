/* HEADER PRINCIPAL*/

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.querySelector('.search-input');
    const announcementBarContent = document.querySelector('.announcement-bar-content');

    searchButton.addEventListener('click', function() {
        searchInput.classList.toggle('active'); // Alterna la clase 'active' en la barra de búsqueda
        
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
        menu.style.display = 'none'; // Ocultar menú
    } else {
        menu.style.display = 'flex'; // Mostrar menú
    }
});

// Opcional: Asegurarte de que el menú esté oculto al cargar la página en pantallas pequeñas
window.addEventListener('load', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth < 600) {
        menu.style.display = 'none'; // Asegurarse de que el menú esté oculto
    }
});

// Opcional: Asegurarte de que el menú se oculte si se redimensiona la ventana
window.addEventListener('resize', function() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth >= 600) {
        menu.style.display = 'flex'; // Mostrar menú en pantallas grandes
    } else {
        menu.style.display = 'none'; // Ocultar menú en pantallas pequeñas
    }
});




/* CARRUSEL */

const content = document.querySelector(".scroll-container");
let scrollSpeed = 2000; // Velocidad de desplazamiento (en milisegundos)
let scrollAmount = 400; // Cantidad de desplazamiento en cada intervalo
let direction = 1; // 1 para derecha, -1 para izquierda
let isScrolling = false; // Para controlar el estado de desplazamiento

// Función para mover el contenido
function scroll() {
    if (isScrolling) return; // Evitar que se ejecute si ya está desplazándose
    isScrolling = true;

    content.scrollLeft += scrollAmount * direction;

    // Verificar si hemos llegado al final o al inicio
    if (content.scrollLeft >= content.scrollWidth - content.clientWidth) {
        direction = -1; // Cambiar dirección a izquierda
    } else if (content.scrollLeft <= 0) {
        direction = 1; // Cambiar dirección a derecha
    }

    // Usar requestAnimationFrame para continuar la animación
    requestAnimationFrame(() => {
        // Usar un timeout para controlar la velocidad del desplazamiento
        setTimeout(() => {
            isScrolling = false; // Permitir un nuevo desplazamiento
            scroll(); // Llamar a scroll nuevamente para continuar el ciclo
        }, scrollSpeed); // Esperar el tiempo definido en scrollSpeed
    });
}

// Función para ajustar el scrollAmount y la velocidad según el tamaño de la ventana
function adjustScrollAmount() {
    if (window.innerWidth < 700) {
        scrollAmount = 320; // Menor desplazamiento en pantallas pequeñas
        scrollSpeed = 3000; // Mayor velocidad en pantallas pequeñas
    } else {
        scrollAmount = 400; // Desplazamiento normal en pantallas grandes
        scrollSpeed = 2000; // Velocidad normal en pantallas grandes
    }
}

// Iniciar el carrusel
scroll(); // Iniciar el ciclo de desplazamiento

// Ajustar el scrollAmount y la velocidad al cargar y al redimensionar la ventana
window.addEventListener('load', adjustScrollAmount);
window.addEventListener('resize', adjustScrollAmount);