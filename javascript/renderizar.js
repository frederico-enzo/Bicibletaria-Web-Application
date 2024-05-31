renderizarProdutos();
function renderizarProdutos() {

const produtos = [
    {
        descricao: "Produto 1",
        imagem: "https://cdn.awsli.com.br/600x1000/1103/1103806/produto/240374650/bicicleta-aro-20-estilo-cross-amarela-tf3oo4vawi.png",
        precoVenda: 100.00,
        precoCusto: 80.00,
        fabricante: "Fabricante 1",
        categoria: "Categoria 1"
    },
    {
        descricao: "Produto 2",
        imagem: "https://cdn.awsli.com.br/600x1000/1103/1103806/produto/240374650/bicicleta-aro-20-estilo-cross-amarela-tf3oo4vawi.png",
        precoVenda: 150.00,
        precoCusto: 120.00,
        fabricante: "Fabricante 2",
        categoria: "Categoria 2"
    },
    {
        descricao: "Produto 3",
        imagem: "https://cdn.awsli.com.br/600x1000/1103/1103806/produto/240374650/bicicleta-aro-20-estilo-cross-amarela-tf3oo4vawi.png",
        precoVenda: 200.00,
        precoCusto: 160.00,
        fabricante: "Fabricante 3",
        categoria: "Categoria 3"
    },
    {
        descricao: "Produto 3",
        imagem: "https://cdn.awsli.com.br/600x1000/1103/1103806/produto/240374650/bicicleta-aro-20-estilo-cross-amarela-tf3oo4vawi.png",
        precoVenda: 200.00,
        precoCusto: 160.00,
        fabricante: "Fabricante 3",
        categoria: "Categoria 3"
    },
    {
        descricao: "Produto 3",
        imagem: "https://cdn.awsli.com.br/600x1000/1103/1103806/produto/240374650/bicicleta-aro-20-estilo-cross-amarela-tf3oo4vawi.png",
        precoVenda: 200.00,
        precoCusto: 160.00,
        fabricante: "Fabricante 3",
        categoria: "Categoria 3"
    },
   
];
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

