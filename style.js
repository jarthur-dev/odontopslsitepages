document.addEventListener('DOMContentLoaded'), function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    })};
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function)
