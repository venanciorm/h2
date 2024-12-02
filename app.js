// Função para filtrar os produtos por categoria
function filtrarProdutos(categoria) {
    // Pega todos os elementos de produto
    const produtos = document.querySelectorAll('.produto');

    // Verifica qual categoria foi clicada e exibe os produtos correspondentes
    produtos.forEach(produto => {
        // Se o produto pertence à categoria, mostra ele, senão, esconde
        if (produto.classList.contains(categoria)) {
            produto.style.display = 'block';  // Exibe o produto
        } else {
            produto.style.display = 'none';  // Esconde o produto
        }
    });
}

// Função para mostrar todos os produtos
function mostrarTodos() {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        produto.style.display = 'block';  // Exibe todos os produtos
    });
}


// Funções para selecionar as categorias e associar ao filtro
document.getElementById('btn-todos').addEventListener('click', mostrarTodos);
document.getElementById('btn-cervejas').addEventListener('click', () => filtrarProdutos('cervejas'));
document.getElementById('btn-refrigerantes').addEventListener('click', () => filtrarProdutos('refrigerantes'));
document.getElementById('btn-agua').addEventListener('click', () => filtrarProdutos('agua'));
document.getElementById('btn-destilados').addEventListener('click', () => filtrarProdutos('destilados'));
