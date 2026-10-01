const prompt = require('prompt-sync')();

let livros = [];

function cadastrarLivro(){
    let titulo = prompt("Digite o titulo: ");
    let autor = prompt("Digite o autor: ");
    let ano = Number(prompt("Digite o ano: "));

    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        disponivel: true
    };

    livros.push(livro);

    console.log("Livro cadastrado com sucesso!");
}

function listarLivros(){
    if(livros.length == 0){
        console.log("ERRO: nenhum livro cadastrado");
    };

    livros.forEach(function(livro){
        console.log(
            "\nTítulo: " + livro.titulo +
            " | Autor: " + livro.autor +
            " | Ano: " + livro.ano +
            " | Disponível: " + livro.disponivel
        );
    });
}

function listarDisponiveis(){
    if(livros.length == 0){
        console.log("ERRO: nenhum livro cadastrado");
    };

    livros.forEach(function(livro){
        if(livro.disponivel == true){
            console.log(
                "\nTítulo: " + livro.titulo +
                " | Autor: " + livro.autor +
                " | Ano: " + livro.ano +
                " | Disponível: " + livro.disponivel
            );
        };
    });
}

function buscarPorTitulo(){
    if(livros.length == 0){
        console.log("ERRO: nenhum livro cadastrado");
    };

    let tituloBuscado = prompt("Digite o título para buscar: ");

    let encontrado = livros.find(function(livro){
        return livro.titulo.toLowerCase() === tituloBuscado.toLowerCase();
    });

    if(encontrado){
        console.log(
                "\nTítulo: " + encontrado.titulo +
                " | Autor: " + encontrado.autor +
                " | Ano: " + encontrado.ano +
                " | Disponível: " + encontrado.disponivel
            );
    } else {
        console.log("ERRO: livro não encontrado!");
    };
}

function emprestarLivro(){
    if(livros.length == 0){
        console.log("ERRO: nenhum livro cadastrado");
    };

    let titulo = prompt("Digite o título para emprestar o livro: ");

    let encontrado = livros.find(function(livro){
        return livro.titulo.toLowerCase() === tituloBuscado.toLowerCase();
    });

    if(!encontrado){
        console.log("ERRO: livro não encontrado!");
    };

    encontrado.disponivel = false;

    console.log("Livro emprestado com sucesso!");
}

function devolverLivro(){
    if(livros.length == 0){
        console.log("ERRO: nenhum livro cadastrado");
    };

    let titulo = prompt("Digite o título para devolver o livro: ");

    let encontrado = livros.find(function(livro){
        return livro.titulo.toLowerCase() === tituloBuscado.toLowerCase();
    });

    if(!encontrado){
        console.log("ERRO: livro não encontrado!");
    };

    encontrado.disponivel = true;

    console.log("Livro devolvido com sucesso!");
}

let opcao;

do{

    console.log("\n========== CRUD BIBLIOTECA ==========");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Listar livros disponíveis");
    console.log("4 - Buscar livro pelo título");
    console.log("5 - Emprestar livro");
    console.log("6 - Devolver livro");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha um opção: "));
    
    switch (opcao) {
        case 1:
            cadastrarLivro();
            break;
        case 2:
            listarLivros();
            break;
        case 3:
            listarDisponiveis();
            break;
        case 4:
            buscarPorTitulo();
            break;
        case 5:
            emprestarLivro();
            break;
        case 6:
            devolverLivro();
            break;
        case 0:
            console.log("Encerrando sistema...");
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.")
            break;
    }

}while(opcao != 0);