class Pessoa{
    #cadastro
    constructor(nome, especialidade) {
        // o constructor é um metodo tradicional
        this.nome = nome;
        this.especialidade = especialidade;
        this.#cadastro = this.#cadastro;
    }
}


class Chef extends Pessoa{
    apresentar() {
        return `Olá, meu nome é ${this.nome} e minha especialidade é ${this.especialidade} , eu cuido de crianças.E também comando o hospital Brasil`;
    }
}

//herdou as infos da classe pessoa
class Vice extends Pessoa{
    apresentando() {
        return `Olá, meu nome é ${this.nome} e minha especialidade é ${this.especialidade} , eu cuido de cerebros.E também sou a vice no comando do hospital Brasil`;
    }
    
}

class Funcionario extends Pessoa{
    falando() {
        return `Olá, meu nome é ${this.nome} e minha especialidade é ${this.especialidade} ,e eu trabalho no hospital Brasil`;
    }
    
}


const yasmin = new Chef ("Yasmin", "Pediatra", 111)

const rafaella = new Vice ("Rafaella", "Neurologista", 222)

const laura = new Funcionario("Laura", "Dentista", 333)
const maria = new Funcionario("Maria", "Ortopedia", 444)
const gustavo = new Funcionario("Gustavo", "Obstreta", 555)
const leonardo = new Funcionario("Leonardo", "Nutricionista", 666)
const sophia = new Funcionario("Sophia", "Piscologia", 777)

yasmin.apresentar();

rafaella.apresentando();

laura.falando();
maria.falando();
gustavo.falando();
leonardo.falando();
sophia.falando();


function exibir(mensagem) {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = mensagem;
    output.appendChild(p);
}


exibir(yasmin.apresentar());
exibir(rafaella.apresentando());
exibir(laura.falando());
exibir(maria.falando());
exibir(gustavo.falando());
exibir(leonardo.falando());
exibir(sophia.falando());
