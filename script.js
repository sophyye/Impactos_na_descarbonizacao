// Seleciona os elementos do menu hambúrguer e da navegação
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Função para ativar/desativar o menu hambúrguer
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu móvel de forma automática assim que o usuário clica em um tópico
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});