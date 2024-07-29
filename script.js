document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Função para efeito de digitação
    function typeWriter(text, element, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback(); // Chama o callback quando o texto terminar de ser digitado
            }
        }
        type();
    }

    // Texto a ser digitado
    const text = "Bem-vindo à \nBarbearia Rodrigues";
    const typewriterText = document.getElementById('typewriter-text');

    typeWriter(text, typewriterText, 100, function() {
        // Adiciona o botão após a digitação terminar
        const button = document.createElement('a');
        button.href = 'https://sites.appbarber.com.br/barbeariarodrig-cwfh'; // Link para a página de agendamento
        button.id = 'schedule-button';
        button.textContent = 'Agende seu horário';
        typewriterText.parentElement.appendChild(button);
    });
});
