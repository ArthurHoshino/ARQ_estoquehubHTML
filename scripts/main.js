
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuToggle.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    
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