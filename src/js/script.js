
function filtrarCards(categoria) {
    const cards = document.querySelectorAll('.Nossos-produtos .card');
    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}