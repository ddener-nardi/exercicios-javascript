let dog = {
    patas: 4,
    raca: 'SRD',
    latir: function () {
        console.log("Au au!");
    }
}

let labrador = Object.create(dog)

labrador.latir()
labrador.raca = 'Labrador'

console.log(labrador.raca);
console.log(dog.raca);

