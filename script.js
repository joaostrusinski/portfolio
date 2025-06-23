// script.js
// Pequeno script JavaScript para atualizar o ano no rodapé automaticamente
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Script para rolagem suave ao clicar nos links de navegação da página única
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Adicionar classe 'active' para destacar o item de navegação ativo
            document.querySelectorAll('.main-nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Adicionar classe 'active' ao item de navegação ao rolar a página
    const sections = document.querySelectorAll('.section-content');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollYPos = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Define uma "zona ativa" para a seção, por exemplo, quando parte da seção está visível
            // Ajuste o valor 0.3 (30% da altura da janela) se sentir que ativa muito cedo ou tarde
            if (scrollYPos >= sectionTop - (windowHeight * 0.3) &&
                scrollYPos < sectionTop + sectionHeight - (windowHeight * 0.3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});