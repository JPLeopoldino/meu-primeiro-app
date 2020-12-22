class Lutador{
    constructor(valorNome, valorOrigem){
        this._nome = valorNome;
        this._origem = valorOrigem;
    }

    get nome(){
        return this._nome;
    }

    set nome(valor){
        // TRATAMENTO
        // VERIFICAÇÃO
        this._nome = valor;
    }

    get origem(){
        return this._origem;
    }

    set origem(valor){
        this._origem = valor;
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

const heroi = new Player("Ryu", "Japão");
const vilao = new Enemy("Blanka", "Brasil");

console.log("Player: " + heroi.nome + " do " + heroi.origem);        // <--| Da na mesma (??)
console.log("Enemy: " + vilao.nome + " do " + vilao.origem);   //  <--| Da na mesma (??)

console.log("Player deu um: ");
heroi.soco();

console.log("Enemy deu um: ");
vilao.soco();

console.log("")                                     //
console.log("----------------------------------")   //
console.log("laço for")                             //                                   

let lutadores = [heroi, vilao];
for(let i = 0 ; i < lutadores.length ; i++) {
    console.log(lutadores[i].nome);
}

console.log("")                                     //
console.log("----------------------------------")   //
console.log("laço forEach")                         //                                 

lutadores.forEach( (lutador) =>{
    console.log(lutador.nome);
});

console.log("")                                     //
console.log("----------------------------------")   //
console.log("laço map")                             //                                

lutadores.map( (lutador) =>{
    console.log(lutador.soco());
});

console.log("")                                     //
console.log("----------------------------------")   //
console.log("laço map numeros")                     //                             

const numeros = [2, 3, 4, 5];
const resultado = numeros.map( (nr) =>{
    return nr * nr;
});

numeros.forEach((r)=>{
    console.log(r)
});

console.log("////////////////////////")

resultado.forEach((r)=>{
    console.log(r)
});

// Spread Operator

let arr = [1, 2, 3];
let arr2 = [...arr];

arr[1] = 8;
arr[2] = 9;

console.log(`Array 1: `);
console.log(arr)

console.log(`Array 2: `);
console.log(arr2)