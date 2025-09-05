function filtrarCards(categoria) {
    const cards = document.querySelectorAll(
        '.Nossos-produtos .card, .Nossos-produtos2 .card, .Nossos-produtos2 .card2, .Nossos-produtos3 .card, .Nossos-produtos3 .card2'
    );

    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}






   let carrinho = [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  cartList.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.preco;
  });

  cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
  cartCount.textContent = carrinho.length;
}

// Seletores
const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");

// Abrir modal
cartIcon.addEventListener("click", () => {
  cartModal.classList.add("open");
});

// Fechar modal
closeCart.addEventListener("click", () => {
  cartModal.classList.remove("open");
});

// Botões "Adicionar ao carrinho"
document.querySelectorAll('.adicionar-carrinho').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const nome = btn.getAttribute('data-nome') || btn.closest('.card, .card2').querySelector('.card-title').textContent;
    const precoStr = btn.getAttribute('data-preco') || btn.closest('.card, .card2').querySelector('.btn-primary').textContent.replace('R$:','').replace(',','.');
    const preco = parseFloat(precoStr);
    if (nome && preco) {
      adicionarAoCarrinho({ nome, preco });
    }
  });
});
const clearCartBtn = document.getElementById("clearCart");

clearCartBtn.addEventListener("click", () => {
  carrinho = []; // esvazia array
  atualizarCarrinho(); // atualiza tela
});
