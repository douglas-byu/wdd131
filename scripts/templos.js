// ===== ANO DINÂMICO NO FOOTER =====
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// ===== DATA DA ÚLTIMA MODIFICAÇÃO =====
const lastModifiedSpan = document.getElementById('last-modified');
lastModifiedSpan.textContent = document.lastModified;

// ===== MENU HAMBURGER =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', function () {
    navMenu.classList.toggle('open');

    // Alterna entre ☰ e ✕
    if (navMenu.classList.contains('open')) {
        hamburgerBtn.textContent = '✕';
    } else {
        hamburgerBtn.textContent = '☰';
    }
});
