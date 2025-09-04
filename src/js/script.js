function filtrarCards(categoria) {
    const cards = document.querySelectorAll('.Nossos-produtos .card');
    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para atualizar os contadores de filtros
function updateFilterCounts() {
    const filters = document.querySelectorAll('.filter-category');
    filters.forEach(filter => {
        // Conta quantos cards têm a categoria correspondente
        const category = filter.value;
        const count = document.querySelectorAll(`.card[data-categories*="${category}"]`).length;
        const countElement = filter.nextElementSibling;
        countElement.textContent = count; // Atualiza o contador ao lado do filtro
    });
}

// // Função para filtrar os cards
// function filterCards() {
//     const filters = document.querySelectorAll('.filter-category:checked');
//     const selectedCategories = Array.from(filters).map(filter => filter.value);

//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         const cardCategories = card.getAttribute('data-categories').split(', ');
//         const isVisible = selectedCategories.every(category => cardCategories.includes(category));
//         card.style.display = isVisible ? 'block' : 'none'; // Exibe ou oculta o card com base no filtro
//     });
// }

// // Event listeners para os filtros
// document.querySelectorAll('.filter-category').forEach(filter => {
//     filter.addEventListener('change', () => {
//         filterCards();
//         updateFilterCounts();
//     });
// });

// // Inicializa o filtro ao carregar a página
// window.onload = function() {
//     updateFilterCounts();
//     filterCards();
// };




const cartButton = document.getElementById('cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');

cartButton.addEventListener('click', () => {
  cartSidebar.classList.add('visible');
});

closeCart.addEventListener('click', () => {
  cartSidebar.classList.remove('visible');
});


const cartItems = document.getElementById('cart-items');

function addToCart(productName) {
  const item = document.createElement('li');
  item.textContent = productName;
  cartItems.appendChild(item);
}
