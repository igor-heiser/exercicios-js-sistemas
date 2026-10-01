const prompt = require('prompt-sync')();

let produtos = [];

function cadastrarProduto(){
    let codigo = Number(prompt("\nDigite o codigo: "));

    let produtoExiste = produtos.find(function(produto){
        return produto.codigo === codigo;
    });

    if(produtoExiste){
        console.log("ERRO: já existe um produto com esse código, tente novamente!");
    }

    let nome = prompt("Digite o nome: ");
    let preco = Number(prompt("Digite o preço: "));
    let quantidade = Number(prompt("Digite a quantidade: "));

    let produto = {
        codigo: codigo,
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }

    produtos.push(produto);

    console.log("Produto cadastrado com sucesso!")
}

function listarProdutos(){
    if(produtos.length == 0){
        console.log("ERRO: nenhum produto cadastrado!");
    }

    produtos.forEach(function(produto){
        console.log(
            "Código: " + produto.codigo +
            " | Nome: " + produto.nome +
            " | Preço R$: " + produto.preco + 
            " | Quantidade: " + produto.quantidade
        );
    });
}

function buscarProdutoPorCodigo(){
    if(produtos.length == 0){
        console.log("ERRO: nenhum produto cadastrado!");
    }

    let codigo = Number(prompt("Digite o código do produto a ser buscado: "));

    let produtoEncontrado = produtos.find(function(produto) {
        return produto.codigo === codigo;
    });

    if(produtoEncontrado){
        console.log(
            "\nCódigo: " + produtoEncontrado.codigo +
            " | Nome: " + produtoEncontrado.nome +
            " | Preço R$: " + produtoEncontrado.preco + 
            " | Quantidade: " + produtoEncontrado.quantidade
        );
    } else {
        console.log("ERRO: produto não encontrado!")
    }
}

function adicionarEstoque() {
    let codigo = Number(prompt("Digite o código do produto: "));

    let produtoEncontrado = produtos.find(function(produto) {
        return produto.codigo === codigo;
    });

    if (!produtoEncontrado) {
        console.log("Produto não encontrado.");
        return;
    }

    let quantidade = Number(
        prompt("Digite a quantidade que deseja adicionar: ")
    );

    produtoEncontrado.quantidade += quantidade;

    console.log("Estoque adicionado com sucesso!");
    console.log("Nova quantidade: " + produtoEncontrado.quantidade);
}

function retirarEstoque() {
    let codigo = Number(prompt("Digite o código do produto: "));

    let produtoEncontrado = produtos.find(function(produto) {
        return produto.codigo === codigo;
    });

    if (!produtoEncontrado) {
        console.log("Produto não encontrado.");
        return;
    }

    let quantidade = Number(
        prompt("Digite a quantidade que deseja retirar: ")
    );

    if (quantidade > produtoEncontrado.quantidade) {
        console.log("Quantidade maior que o estoque disponível.");
        return;
    }

    produtoEncontrado.quantidade -= quantidade;

    console.log("Estoque retirado com sucesso!");
    console.log("Nova quantidade: " + produtoEncontrado.quantidade);
}

function mostrarValorTotalEstoque(){
    if(produtos.length == 0){
        console.log("ERRO: nenhum produto cadastrado!");
    }

    let valorTotal = 0;

    produtos.forEach(function(produto){
        valorTotal += produto.preco * produto.quantidade;
    });

    console.log("O valor total em estoque é de: R$" + valorTotal);
}

let opcao;

do{

    console.log("\n========== CRUD ESTOQUE ==========");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto pelo código");
    console.log("4 - Adicionar estoque");
    console.log("5 - Retirar estoque");
    console.log("6 - Mostrar valor total do estoque");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha um opção: "));
    
    switch (opcao) {
        case 1:
            cadastrarProduto();
            break;
        case 2:
            listarProdutos();
            break;
        case 3:
            buscarProdutoPorCodigo();
            break;
        case 4:
            adicionarEstoque();
            break;
        case 5:
            retirarEstoque();
            break;
        case 6:
            mostrarValorTotalEstoque();
            break;
        case 0:
            console.log("Encerrando sistema...");
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.")
            break;
    }

}while(opcao != 0);