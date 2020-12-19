class Lutador{
    constructor(valorNome, valorOrigem){
        this.nome = valorNome;
        this.origem = valorOrigem;
    }

    getNome(){
        return this.nome;
    }

    getOrigem(){
        return this.origem;
    }

    soco(){
        console.log("Soco simples ...");
    }
}

class Player extends Lutador {
    constructor(valorNome, valorOrigem){
        super(valorNome, valorOrigem);
    }
    soco(){
        console.log("Soco duplo ...");
    }
}

class Enemy extends Lutador {
    constructor(valorNome, valorOrigem){
        super(valorNome, valorOrigem);
    }
    soco(){
        console.log("Soco carregado ...");
    }
}

const ryu = new Player("Ryu", "Japão");
const blanka = new Enemy("Blanka", "Brasil");

console.log("Player: " + ryu.getNome() + " da " + ryu.getOrigem());        // <--| Da na mesma (??)
console.log("Enemy: " + blanka.nome + " da " + blanka.origem);            //  <--| Da na mesma (??)

console.log("Player deu um: ");
ryu.soco();

console.log("Enemy deu um: ");
blanka.soco();