// ════════════════════════════════════════════════
// THEME TOGGLE
// ════════════════════════════════════════════════

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// ════════════════════════════════════════════════
// HAMBURGER MENU
// ════════════════════════════════════════════════

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ════════════════════════════════════════════════
// CARRUSEL DADÁ
// ════════════════════════════════════════════════

const track = document.getElementById('carruselTrack');
const slides = document.querySelectorAll('.carrusel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarrusel(index) {
    // Asegurar que el índice esté dentro del rango
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;

    // Mover el track
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Actualizar dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Eventos de los botones
prevBtn.addEventListener('click', () => {
    updateCarrusel(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    updateCarrusel(currentIndex + 1);
});

// Eventos de los dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateCarrusel(index);
    });
});

// Auto-reproducción (pausa al hacer hover)
let autoPlay = setInterval(() => {
    updateCarrusel(currentIndex + 1);
}, 5000);

const carruselContainer = document.querySelector('.carrusel-container');
carruselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
});
carruselContainer.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
        updateCarrusel(currentIndex + 1);
    }, 5000);
});

// ════════════════════════════════════════════════
// SCROLL SUAVE
// ════════════════════════════════════════════════

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ════════════════════════════════════════════════
// FORMULARIO
// ════════════════════════════════════════════════

const form = document.querySelector('.contacto-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const mensaje = form.querySelector('textarea').value.trim();

        if (!nombre || !email || !mensaje) {
            alert('¡Oye! Completa todos los campos 😤');
            return;
        }

        alert('¡Mensaje enviado! (Demo - Conecta con backend) 🚀');
        form.reset();
    });
}

// ════════════════════════════════════════════════
// EFECTO DADÁ: Rotación aleatoria en elementos
// ════════════════════════════════════════════════

document.querySelectorAll('.dada-card').forEach(el => {
    const rot = (Math.random() - 0.5) * 4;
    el.style.setProperty('--dada-rot', `${rot}deg`);
});