/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

body {
    color: #333;
    line-height: 1.6;
    background-color: #faf9f6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 20px;
}

h2 {
    font-size: 2.5rem;
    color: #2e5a1c;
    margin-bottom: 20px;
    text-align: center;
}

/* Cabeçalho e Menu */
header {
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2e5a1c;
}

.logo span {
    font-size: 0.9rem;
    color: #e67e22;
    display: block;
}

.nav-menu ul {
    display: flex;
    list-style: none;
}

.nav-menu a {
    color: #555;
    text-decoration: none;
    font-weight: 600;
    padding: 10px 15px;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #2e5a1c;
}

/* Menu Hambúrguer (Oculto no Desktop) */
.hamburger {
    display: none;
    cursor: pointer;
    background: none;
    border: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #2e5a1c;
}

/* Seção Hero (Banner Inicial) */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 0 20px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 30px auto;
}

.btn {
    background-color: #e67e22;
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s;
}

.btn:hover {
    background-color: #d35400;
}

/* Estilos de Seções Variadas */
.bg-light {
    background-color: #edf2f4;
}

.bg-dark {
    background-color: #1b3312;
}

.text-white {
    color: white !important;
}

.text-white h2 {
    color: white;
}

/* Grid de Impactos */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 15fr));
    gap: 30px;
    margin-top: 40px;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-top: 5px solid #2e5a1c;
}

.card h3 {
    margin-bottom: 15px;
    color: #2e5a1c;
}

/* Lista de Soluções */
#solucoes ul {
    list-style-type: none;
    max-width: 800px;
    margin: 30px auto 0 auto;
}

#solucoes li {
    background: #ffffff;
    margin-bottom: 15px;
    padding: 20px;
    border-left: 5px solid #e67e22;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

/* Rodapé */
footer {
    background-color: #111;
    color: #aaa;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
}

/* Responsividade (Telas de até 768px) */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    /* Transforma o menu em um painel suspenso */
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 80px;
        gap: 0;
        flex-direction: column;
        background-color: #ffffff;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    }

    .nav-menu ul {
        flex-direction: column;
        padding: 20px 0;
    }

    .nav-menu li {
        margin: 15px 0;
    }

    /* Quando o menu estiver ativo */
    .nav-menu.active {
        left: 0;
    }

    /* Animação do botão hambúrguer virando 'X' */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .hero h1 {
        font-size: 2.3rem;
    }
}