//FILTRO PÁGINA CATEGORIAS

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



//CARRINHO

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


const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");


cartIcon.addEventListener("click", () => {
  cartModal.classList.add("open");
});


closeCart.addEventListener("click", () => {
  cartModal.classList.remove("open");
});


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
  carrinho = []; 
  atualizarCarrinho(); 
});



// ABA DE PRODUTOS


document.addEventListener('DOMContentLoaded', function () {
    const modal = new bootstrap.Modal(document.getElementById('produtoModal'));
    const verMaisButtons = document.querySelectorAll('.ver-mais');

    verMaisButtons.forEach(button => {
      button.addEventListener('click', () => {
        const nome = button.getAttribute('data-nome');
        const descricao = button.getAttribute('data-descricao');
        const preco = button.getAttribute('data-preco');
        const imagem = button.getAttribute('data-imagem');

        document.getElementById('modalNome').innerText = nome;
        document.getElementById('modalDescricao').innerText = descricao;
        document.getElementById('modalPreco').innerText = `R$ ${parseFloat(preco).toFixed(2)}`;
        document.getElementById('modalImagem').src = imagem;

        const btnAdd = document.getElementById('modalAdicionarCarrinho');
        btnAdd.setAttribute('data-nome', nome);
        btnAdd.setAttribute('data-preco', preco);

        modal.show();
      });
    });
    document.getElementById('modalAdicionarCarrinho').addEventListener('click', function () {
      const nome = this.getAttribute('data-nome');
      const preco = this.getAttribute('data-preco');

      adicionarAoCarrinho(nome, parseFloat(preco));
      
      modal.hide();
    });
  });