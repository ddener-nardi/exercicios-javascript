const dog = {
    raca: 'pinscher',
    uivar: function(){
        console.log('Uivando...');
    },
    rosnar: function () {
        console.log('Rosnando...');        
    },
    setRaca: function(raca) {
        this.raca = raca;       
    },
    getRaca: function() {
        return `A raça é ${this.raca}.`        
    }
}

dog.setRaca('German Shepherd')

console.log(dog.getRaca())
