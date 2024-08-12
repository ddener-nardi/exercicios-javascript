class Mamifero{
    constructor(patas){
        this.patas = patas
    }
    uivar(){
        console.log('Uivando...')
    }
}
class Dog extends Mamifero{
    constructor(patas, raca){
        super(patas, patas)
        this.raca = raca
    }
    ladrar(){
        console.log('Latindo...')
    }
}

sammy = new Dog(4, 'Pinscher')

sammy.uivar()
sammy.ladrar()
console.log(new Dog instanceof Mamifero);
