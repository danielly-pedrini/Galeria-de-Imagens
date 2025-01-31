document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image');
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselLines = document.querySelectorAll('.carousel-line');
    
    // Função para remover classes de todas as imagens
    function resetAllImages() {
        imageContainers.forEach(container => {
            container.classList.remove('active');
            container.classList.remove('grayscale');
        });
    }

    // Função para pausar o carrossel
    function pauseCarousel() {
        carouselLines.forEach(line => {
            line.classList.add('paused');
        });
    }

    // Função para retomar o carrossel
    function resumeCarousel() {
        carouselLines.forEach(line => {
            line.classList.remove('paused');
        });
    }

    // Adicionar eventos para cada container de imagem
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            // Pausa o carrossel
            pauseCarousel();
            
            // Reset e aplica os efeitos de grayscale
            resetAllImages();
            imageContainers.forEach(otherContainer => {
                otherContainer.classList.add('grayscale');
            });
            
            // Remove grayscale apenas da imagem atual
            this.classList.remove('grayscale');
            this.classList.add('active');
        });
    });

    // Quando o mouse sai do carrossel
    carouselContainer.addEventListener('mouseleave', function() {
        // Remove todos os efeitos de grayscale
        resetAllImages();
        // Retoma a animação do carrossel
        resumeCarousel();
    });
});