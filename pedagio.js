// Somente um teste

const umEixo = 4.5
const doisEixos = 8.5

class Veiculo{
    constructor(eixos, semParar){
        this.eixos = eixos;
        this.semParar = semParar;
    }

    getSemParar(){
        if(this.semParar == 1){
            return this.eixos == 0
        }
    }

    getEixos(){
        if(this.eixos == 0){
            console.log("Não paga nada");
        } else if(this.eixos == 1){
            console.log("Valor a ser cobrado: R$" + umEixo);
        } else if(this.eixos == 2){
            console.log("Valor a ser cobrado: R$" + doisEixos);
        } else {
            console.log("Prepara a carteira que você vai pagar caro ein!!");
        };
    }
    
}

const carro = new Veiculo(2,0)
const moto = new Veiculo(1,false)
const carroRico = new Veiculo(2,1)

console.log(carro.getEixos(), carro.getSemParar())
console.log(carroRico.getEixos(), carro.getSemParar())