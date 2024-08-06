// func para ativar a animção de texto via button (botões presentes atualmente na index.html)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o parágrafo associado ao botão clicado
            const textContainer = button.nextElementSibling;

            // Alterna a classe entre 'hidden' e 'visible'
            if (textContainer.classList.contains('visible')) {
                textContainer.classList.remove('visible');
                textContainer.classList.add('hidden');
            } else {
                textContainer.classList.remove('hidden');
                textContainer.classList.add('visible');
            }
        });
    });
});