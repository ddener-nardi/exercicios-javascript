class Dog{
    constructor(nome, raca, peso){
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }

    get getRaca() {
        return `A raça de ${this.nome} é ${this.raca}.`
    }
    set setRaca(nomeRaca){
        this.raca = nomeRaca
    }
}

let patas = Symbol();

Dog.prototype[patas] = 4

// acessando symbol

console.log(Dog.prototype[patas])