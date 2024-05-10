
function cadastrarProduto() {
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;
    const precoVenda = document.getElementById('preco_venda').value;
    const precoCusto = document.getElementById('preco_custo').value;
    const fabricante = document.getElementById('fabricante').value;
    const categoria = document.getElementById('categoria').value;

    const novoProduto = {
        descricao: descricao,
        imagem: imagem,
        precoVenda: precoVenda,
        precoCusto: precoCusto,
        fabricante: fabricante,
        categoria: categoria
    };

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.push(novoProduto);

    localStorage.setItem('produtos', JSON.stringify(produtos));

    limparCampos();

}

function limparCampos() {
    document.getElementById('descricao').value = '';
    document.getElementById('imagem').value = '';
    document.getElementById('preco_venda').value = '';
    document.getElementById('preco_custo').value = '';
    document.getElementById('fabricante').value = '';
    document.getElementById('categoria').value = '';
}

document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrarProduto();
});



