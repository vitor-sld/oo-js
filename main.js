
function CadastroCatraca(nome, nomeSocial, cpf, cargo, periodo, dados) {
    let documentos = cpf;
    let hierarquia = cargo;

    this.nome = nome;
    this.Social = nomeSocial;
    this.periodo = periodo;

    //o que será exibibo para o sistema
    this.exibirDadosCadastrais = function () {
        console.log(`
        Visão do sistema:
        Nome: ${nome};
        Nome Social: ${nomeSocial};
        CPF: ${documentos};
        Cargo Hierarquico: ${cargo};
        horário: ${periodo}
        `)
    }
    //o que será exibibo na tela da catraca
    this.exibirNaCatraca = function () {

        if (nomeSocial != null) {
            console.log(`
            Visão da Catraca:
            Nome Social: ${nomeSocial};
            CPF: ${documentos};
            Cargo Hierarquico: ${cargo};
            horário: ${periodo}
            `);
        } else {
            console.log(`
            Visão da Catraca:
            Nome: ${nome};
            CPF: ${cpf};
            Cargo Hierarquico: ${cargo};
            horário: ${periodo}
            `);
        }

    }
}

function Aluno(nome, nomeSocial, cpf, periodo) {

    if (periodo == "Matutino") {
        const periodo = "7:00-12:00";
        CadastroCatraca.call(this,nome, nomeSocial, cpf, "Aluno", periodo);
        console.log("a")

    }
    if (periodo == "Vespertino") {
        const periodo = "12:30-17:30";
        CadastroCatraca.call(this,nome, nomeSocial, cpf, "aluno", periodo);

    }
    if (periodo == "Noturno") {
        const periodo = "18:00-22h";
        CadastroCatraca.call(this,nome, nomeSocial, cpf, "aluno", periodo);

    }
    if (periodo != "Matutino" && periodo != "Vespertino" && periodo != "Noturno") {
        console.error("erro no cadastro do " + nome+ ", insira um período válido: Matutino; Vespertino; Noturno");
    }
}

function Professor(nome, nomeSocial, cpf){
    CadastroCatraca.call(this,nome, nomeSocial, cpf, "Professor", "Escalável");
}

const aluno1 = new Aluno("Vitor Augusto", null, "123.432.123.32", "Vespertino");
const aluno2 = new Aluno("Joana Silva", "Carlos Silva", "321.234.321.21", "Matutino");
const professor1 = new Professor("Jonathan Ferreira", null, "432.234.543.45");



aluno1.exibirDadosCadastrais();
aluno2.exibirNaCatraca();
professor1.exibirDadosCadastrais();