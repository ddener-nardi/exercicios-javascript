class Dog{
    constructor(nome, raca, peso){
        this.nome = nome
        this.raca = raca
        this.peso = peso
        this.patas = 4
    }

    getRaca() {
        return `A raça de ${this.nome} é ${this.raca}.`
    }
}

let labrador = new Dog('Bolt', 'Labrador', 10.25)

console.log(labrador.getRaca())
console.log(labrador);
console.log(labrador.patas);


