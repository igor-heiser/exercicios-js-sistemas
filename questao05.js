const prompt = require('prompt-sync')();

const geradorDeId = (() => {
  let contador = 0;
  return () => ++contador;
})();

let movimentacoes = [];

function registrarReceita(){
    let valor = Number(prompt("\nDigite o valor da receita: "));
    let descricao = prompt("Digite a descrição: ");

    let movimentacao = {
        id: geradorDeId(),
        descricao: descricao,
        tipo: "Receita",
        valor: valor
    };

    movimentacoes.push(movimentacao);

    console.log("\nMovimentação registrada com sucesso!");
}

function registrarDespesas(){
    let valor = Number(prompt("\nDigite o valor da despesa: "));
    let descricao = prompt("Digite a descrição: ");

    let movimentacao = {
        id: geradorDeId(),
        descricao: descricao,
        tipo: "Despesa",
        valor: valor
    };

    movimentacoes.push(movimentacao);

    console.log("\nMovimentação registrada com sucesso!");
}

function listarMovimentacoes(){
    if(movimentacoes.length == 0){
        console.log("ERRO: nenhuma movimentação foi registrada!");
    };

    movimentacoes.forEach(function(movimentacao){
        console.log(
            "\n--------------------\n" + 
            " | ID: " + movimentacao.id + 
            " | Descrição: " + movimentacao.descricao +
            " | Tipo: " + movimentacao.tipo +
            " | Valor: R$" + movimentacao.valor
        );
    });
}

function calcularReceitas(){
    let totalReceitas = 0;

    movimentacoes.forEach(function(movimentacao){
        if(movimentacao.tipo === "Receita"){
            totalReceitas += movimentacao.valor;
        }
    });

    return totalReceitas;
}

function mostrarTotalReceitas(){
    if(movimentacoes.length == 0){
        console.log("ERRO: nenhuma movimentação foi registrada!");
    };

    console.log("\nO valor total das receitas é: R$" + calcularReceitas());
}

function calcularDespesas(){
    let totalDespesas = 0;

    movimentacoes.forEach(function(movimentacao){
        if(movimentacao.tipo === "Despesa"){
            totalDespesas += movimentacao.valor;
        }
    });

    return totalDespesas;
}

function mostrarTotalDespesas(){
    if(movimentacoes.length == 0){
        console.log("ERRO: nenhuma movimentação foi registrada!");
    };

    console.log("\nO valor total das despesas é: R$" + calcularDespesas());
}

function mostrarSaldo(){
    if(movimentacoes.length == 0){
        console.log("ERRO: nenhuma movimentação foi registrada!");
    };

    let saldo = calcularReceitas() - calcularDespesas();

    console.log("\nO saldo atual da sua conta é: R$" + saldo);
}

function buscarMovimentacaoPorId(){
    if(movimentacoes.length == 0){
        console.log("ERRO: nenhuma movimentação foi registrada!");
    };

    let id = Number(prompt("Digite o ID da movimentação a ser buscada: "));

    let movimentacaoEncontrada = movimentacoes.find(function(movimentacao){
        return movimentacao.id === id;
    });

    if(movimentacaoEncontrada){
        console.log(
            "\nMovimentação encontrada:\n" +
            " | ID: " + movimentacaoEncontrada.id +
            " | Descrição: " + movimentacaoEncontrada.descricao +
            " | Tipo: " + movimentacaoEncontrada.tipo +
            " | Valor: R$" + movimentacaoEncontrada.valor
        );
    } else {
        console.log("Nenhuma movimentação encontrada com este ID.");
    };
}

function removerMovimentacao(){
    if(movimentacoes.length == 0){
        console.log("ERRO: nenhuma movimentação foi registrada!");
    };

    let id = Number(prompt("Digite o ID da movimentação a ser removida: "));

    let movimentacaoEncontrada = movimentacoes.find(function(movimentacao){
        return movimentacao.id === id;
    });

    if(movimentacaoEncontrada){
        movimentacoes.splice(movimentacaoEncontrada, 1);
    } else {
        console.log("Nenhuma movimentação encontrada com este ID.");
    };

    console.log("\nMovimentação removida com sucesso!");
}

let opcao;

do{

    console.log("\n====== CRUD SISTEMA FINANCEIRO ======");
    console.log("1 - Registrar receita");
    console.log("2 - Registrar despesa");
    console.log("3 - Listar movimentações");
    console.log("4 - Mostrar total de receitas");
    console.log("5 - Mostrar total de despesas");
    console.log("6 - Mostrar saldo");
    console.log("7 - Buscar movimentação pelo ID");
    console.log("8 - Remover movimentação");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha um opção: "));
    
    switch (opcao) {
        case 1:
            registrarReceita();
            break;
        case 2:
            registrarDespesas();
            break;
        case 3:
            listarMovimentacoes();
            break;
        case 4:
            mostrarTotalReceitas();
            break;
        case 5:
            mostrarTotalDespesas();
            break;
        case 6:
            mostrarSaldo();
            break;
        case 7:
            buscarMovimentacaoPorId();
            break;
        case 8:
            removerMovimentacao();
            break;
        case 0:
            console.log("Encerrando sistema...");
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.")
            break;
    }

}while(opcao != 0);