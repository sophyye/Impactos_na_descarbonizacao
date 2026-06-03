/* Configurações Gerais */
// Aguarda o documento ser totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de hambúrguer e a lista de links
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-links li a");

    // Adiciona o evento de clique no hambúrguer
    hamburger.addEventListener("click", function() {
        // Alterna a classe 'active', que faz o menu aparecer ou desaparecer no CSS
        navLinks.classList.toggle("active");
    });

    // Faz com que o menu feche automaticamente após clicar em uma das opções
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});