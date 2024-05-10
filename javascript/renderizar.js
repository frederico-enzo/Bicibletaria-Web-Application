renderizarProdutos();
function renderizarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const produtosContainer = document.getElementById('produtos-container');

    produtosContainer.innerHTML = '';

    produtos.forEach(function(produto) {
        const cardHTML = `
            <div class="product-card">
                <img src="${produto.imagem}" alt="">
                <h3>${produto.descricao}</h3>
                <p>Preço: R$ ${produto.precoVenda}</p>
                <button class="add-to-cart">Adicionar no Carrinho</button>
            </div>
        `;
        produtosContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

