// Inicializa o slideIndex e mostra os slides
let slideIndex = 1;
showSlides(slideIndex);

// Avança ou retrocede os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Mostra o slide atual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Função principal para mostrar os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Verifica os limites dos slides
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Esconde todos os slides e remove a classe "active" dos pontos
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostra o slide atual e marca o ponto correspondente como ativo
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Função para alternar a exibição do menu em telas menores
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items');
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

// Adiciona um ouvinte de evento para o clique no botão de menu
document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

// Adiciona ouvintes de eventos para exibir tooltips nos ícones de redes sociais
document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = icon.getAttribute('title');
            document.body.appendChild(tooltip);

            const iconRect = icon.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            tooltip.style.top = iconRect.top - tooltipRect.height - 5 + 'px';
            tooltip.style.left = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2 + 'px';
        });

        icon.addEventListener('mouseout', function () {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.parentNode.removeChild(tooltip);
            }
        });
    });
});

// Adiciona funcionalidade ao botão de alternar o modo escuro
const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Verifica e aplica o modo escuro com base no armazenamento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';
toggleButton.checked = isDarkMode;
body.classList.toggle('dark_mode', isDarkMode);

// Adiciona um ouvinte de evento para alterar o modo escuro
toggleButton.addEventListener('change', () => {
    const darkModeEnabled = toggleButton.checked;
    body.classList.toggle('dark_mode', darkModeEnabled);
    localStorage.setItem('darkMode', darkModeEnabled);
});

