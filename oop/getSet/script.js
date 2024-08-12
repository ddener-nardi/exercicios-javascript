class Dog{
    constructor(nome, raca, peso, genero){
        this.nome = nome
        this.raca = raca
        this.peso = peso
        this.genero = genero

    }

    get getRaca() {
        if (this.genero.toLowerCase() == 'm'){
            return `A raça do ${this.nome} é ${this.raca}.`
        }else{
            return `A raça da ${this.nome} é ${this.raca}`
        }
    }
    set setRaca(nomeRaca){
        this.raca = nomeRaca
    }
}

let labrador = new Dog('Bolt', 'labrador', 10.58, 'M')

console.log(labrador.raca);
labrador.setRaca = 'pinscher'

console.log(labrador.getRaca);

let sammy = new Dog('Sammy', 'pinscher', 4.42, 'F')

console.log(sammy.getRaca);
