function scrollCarrossel(sectionId, direcao) {
    const section = document.getElementById(sectionId);
    const carrossel = section.querySelector('.carrossel-img');
    const larguraCard = carrossel.querySelector('.item-pacote').offsetWidth;
    const scrollAmount = larguraCard + 20; 

    if (direcao === 1) {
        const isAtEnd = carrossel.scrollLeft + carrossel.offsetWidth >= carrossel.scrollWidth - 10;
        
        if (isAtEnd) {
            carrossel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    } else {
        const isAtStart = carrossel.scrollLeft <= 0;

        if (isAtStart) {
            carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
        } else {
            carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
}