'use strict'

class User {
    constructor(name, firstname) {
        this.name = name,
        this.firstname = firstname
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        prompt('Put your name here');
        return this.name = newName;
    }

    sayHello() {
        console.log(`Hola ${this.name} que tal estas`)
    }
}

const Fran = new User ('Fran', 'Alcaraz');
Fran.setName('Fran');
console.log(`${Fran.getName()}`);
Fran.sayHello();