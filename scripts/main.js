
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);


});
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.aside li');

    links.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' de todos
            links.forEach(l => l.querySelector('a').classList.remove('active'));
            // Adiciona 'active' apenas ao clicado
            link.querySelector('a').classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.aside a, .mobile-menu-links a');

    // Ativa o primeiro link ao carregar a página
    if (menuLinks.length) {
        menuLinks[0].classList.add('active');
    }

    // Adiciona o clique para ativar o link clicado
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

