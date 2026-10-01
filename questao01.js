const prompt = require('prompt-sync')();

let alunos = [];

function calcularMedia(aluno){
    let soma = 0;

    for(let i = 0; i < aluno.notas.length; i++){
        soma += aluno.notas[i];
    }

    return soma / aluno.notas.length;
}

function cadastrarAluno() {
    let nome = prompt("Digite o nome: ");
    let idade = Number(prompt("Digite a idade: "));
    let curso = prompt("Digite o curso: ");
    let quantidadeNotas = Number(prompt("Digite a quantidade de notas: "));

    let notas = [];

    for(let i = 0; i < quantidadeNotas; i++){
        let nota = Number(prompt("Digite a " + (i + 1) + "° nota: "));
        notas.push(nota);
    }

    let aluno = {
        nome: nome,
        idade: idade,
        curso: curso,
        notas: notas,
    }

    alunos.push(aluno);

    console.log("Aluno cadastrado com sucesso!");
}

function listarAlunos(){
    if(alunos.length === 0){
        console.log("ERRO: nenhum aluno cadastrado!")
    }

    alunos.forEach(function(aluno) {
        let media = calcularMedia(aluno);
        console.log(
            "\nNome: " + aluno.nome +
            " | Idade: " + aluno.idade +
            " | Curso: " + aluno.curso +
            " | Notas: " + aluno.notas +
            " | Média: " + media
        );
    });
}

function buscarAlunoPorNome(){
    let nomeBuscado = prompt("Digite o nome do aluno para buscar: ");

    let alunoEncontrado = alunos.find(function(aluno) {
        return aluno.nome.toLowerCase() === nomeBuscado.toLowerCase();
    });

    if(alunoEncontrado){
        console.log(
            "Nome: " + alunoEncontrado.nome +
            " | Idade: " + alunoEncontrado.idade +
            " | Curso: " + alunoEncontrado.curso +
            " | Notas: " + alunoEncontrado.notas +
            " | Média: " + media
        );
    } else {
        console.log("ERRO: aluno não encontrado!")
    }
}

function mostrarAprovados(){
    if(alunos.length === 0){
        console.log("ERRO: nenhum aluno cadastrado!")
    }

    console.log("\nAlunos aprovados: \n");

    alunos.forEach(function(aluno) {
        let media = calcularMedia(aluno);

        if(media >= 7){
            console.log(
            "Nome: " + aluno.nome +
            " | Idade: " + aluno.idade +
            " | Curso: " + aluno.curso +
            " | Notas: " + aluno.notas +
            " | Média: " + media
        );
        }
    });
}

function mostrarMediaGeralTurma(){
    if(alunos.length === 0){
        console.log("ERRO: nenhum aluno cadastrado!")
    }

    let soma = 0;

    alunos.forEach(function(aluno){
        soma += calcularMedia(aluno);
    });

    let mediaGeral = soma / alunos.length;

    console.log("A média geral da turma é: " + mediaGeral);
}

let opcao;

do{

    console.log("\n========== CRUD ALUNOS ==========");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Buscar aluno pelo nome");
    console.log("4 - Mostrar alunos aprovados");
    console.log("5 - Mostrar média geral da turma");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha um opção: "));
    
    switch (opcao) {
        case 1:
            cadastrarAluno();
            break;
        case 2:
            listarAlunos();
            break;
        case 3:
            buscarAlunoPorNome();
            break;
        case 4:
            mostrarAprovados();
            break;
        case 5:
            mostrarMediaGeralTurma();
            break;
        case 0:
            console.log("Encerrando sistema...");
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.")
            break;
    }
    
}while(opcao != 0);