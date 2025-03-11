class Pessoa{
    constructor(nome, especialidade) {
        // o constructor é um metodo tradicional
        this.nome = nome;
        this.especialidade = especialidade;
    }
    //metodo
    apresentar = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}.`);
}


//herdou as infos da classe pessoa
class Funcionario extends Pessoa{
    falar = () => console.log(`Olá, sou ${this.nome} e minha profissão é ${this.especialidade} que cuida de cerebros.`);
    dizer = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade} e cuido da saude dos dentes dos meus pacientes.`);
    explica = () => console.log(`Olá, sou ${this.nome} e minha função é ${this.especialidade} eu.`);
    apresentar = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}.`);
    apresentar = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}.`);
    apresentar = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}.`);
}


const yasmin = new Funcionario("Yasmin", "Pediatra")
const rafaella = new Funcionario("Rafaella", "Neurologista")
const laura = new Funcionario("Laura", "Dentista")
const maria = new Funcionario("Maria", "Ortopedia")
const gustavo = new Funcionario("Gustavo", "Obstreta")
const leonardo = new Funcionario("Leonardo", "Nutricionista")
const sophia = new Funcionario("Sophia", "Piscologa")

yasmin.apresentar();
rafaella.falar();
laura.dizer();
maria.explica();
gustavo.apresentar();
leonardo.apresentar();