// AOS init
AOS.init();

// Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Particles
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '#ff6b6b' },
        shape: { type: 'char', char: '<>' },
        opacity: { value: 0.7, random: false },
        size: { value: 10, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 8, direction: 'bottom', random: false, straight: true, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Typed
var typed = new Typed('#typed', {
    strings: ['Backend-разработчик', 'немного Frontend-разработчик', 'увлекающийся Python, JS и проектами на GitHub'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// GSAP Parallax removed due to layout issues

// Preloader
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});

// Back to Top
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reset scroll on page load
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.createElement('p');
    dateElement.textContent = 'Сегодня ' + new Date().toLocaleDateString('ru-RU');
    dateElement.style.color = 'azure';
    dateElement.style.textAlign = 'center';
    dateElement.style.marginTop = '10px';
    document.querySelector('footer').appendChild(dateElement);
});