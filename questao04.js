const prompt = require('prompt-sync')();

const cardapio = [
    { codigo: 1, nome: "X-Burger", preco: 18 },
    { codigo: 2, nome: "X-Salada", preco: 22 },
    { codigo: 3, nome: "Batata Frita", preco: 15 },
    { codigo: 4, nome: "Refrigerante", preco: 7 }
];

let pedidos = [];

const geradorDeNumero = (() => {
  let contador = 0;
  return () => ++contador;
})();

function buscarPedido(codigo){
    return cardapio.find(function(produto){
        return produto.codigo === codigo;
    });
}

function mostrarCardapio(){

    console.log("\nConfira nossa cardápio:");

    cardapio.forEach(function(produto){
        console.log(
            "Código: " + produto.codigo +
            " | Nome: " + produto.nome +
            " | Preço: R$" + produto.preco
        );
    });

}

function criarPedido(){

    let itens = [];
    let total = 0;
    let clienteNome = prompt("Digite seu nome: ");

    do{

        mostrarCardapio();
        
        let codigo = Number(prompt("\nDigite o código do produto: "));

        let encontrado = buscarPedido(codigo);

        if(!encontrado){
            console.log("ERRO: produto não encontrado!");
        } else {

            let quantidade = Number(prompt("Digite a quantidade: "));

            let subTotal = quantidade * encontrado.preco;

            let item = {
                produto: encontrado.nome,
                quantidade: quantidade,
                subTotal: subTotal
            }

            itens.push(item);
            
            total += subTotal;

        }

        console.log("\nQuer adicionar mais itens?");
        console.log("1 - Sim");
        console.log("0 - Não");
        opcaoCadastrar = Number(prompt("Escolha uma opção: "));

    }while(opcaoCadastrar != 0);

    let pedido = {
        numero: geradorDeNumero(),
        cliente: clienteNome,
        itens: itens,
        total: total
    };

    pedidos.push(pedido);

    console.log("\nPedido criado com sucesso!");
    console.log("Número do pedido: " + pedido.numero);
    console.log("Total do pedido: R$" + pedido.total)
}

function listarPedidos(){
    if(pedidos.length == 0){
        console.log("ERRO: nenhum pedido cadastrado!")
    }

    pedidos.forEach(function(pedido){

        pedidos.forEach(function(pedido){
            console.log("\n------------------");
            console.log("Número: " + pedido.numero);
            console.log("Cliente: " + pedido.cliente);

        pedido.itens.forEach(function(item){
            console.log(
                item.produto + 
                " | Quantidade: " + item.quantidade +
                " | Subtotal: R$" + item.subTotal
            );
        });
            console.log("Total: R$" + pedido.total);
        });

    });
}

function buscarPedidoPorNome(){

    if(pedidos.length == 0){
        console.log("ERRO: nenhum pedido cadastrado!")
    }

    let numero = Number(prompt("Digite o número do pedido para buscar: "));

    let encontrado = pedidos.find(function(pedido){
        return pedido.numero === numero;
    });

    if(encontrado){
        console.log("\n------------------");
        console.log("Número: " + encontrado.numero);
        console.log("Cliente: " + encontrado.cliente);

        encontrado.itens.forEach(function(item){
            console.log(
                item.produto + 
                " | Quantidade: " + item.quantidade +
                " | Subtotal: R$" + item.subTotal
            );
        });
            console.log("Total: R$" + encontrado.total);
    } else {
        console.log("ERRO: não existe nenhum pedido com esse número!");
    };

}

function mostrarFaturamentoTotal(){
    let total = 0;

    pedidos.forEach(function(pedido){
        total += pedido.total;
    });
    
    console.log("\nO faturamento total é: R$" + total);
}

let opcao;

do{

    console.log("\n========== CRUD RESTAURANTE ==========");
    console.log("1 - Mostrar cardápio");
    console.log("2 - Criar pedido");
    console.log("3 - Listar pedidos");
    console.log("4 - Buscar pedido pelo número");
    console.log("5 - Mostrar faturamento total");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha um opção: "));
    
    switch (opcao) {
        case 1:
            mostrarCardapio();
            break;
        case 2:
            criarPedido();
            break;
        case 3:
            listarPedidos();
            break;
        case 4:
            buscarPedidoPorNome();
            break;
        case 5:
            mostrarFaturamentoTotal();
            break;
        case 0:
            console.log("Encerrando sistema...");
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.")
            break;
    }

}while(opcao != 0);