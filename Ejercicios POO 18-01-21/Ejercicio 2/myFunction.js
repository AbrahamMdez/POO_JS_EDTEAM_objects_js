'use strict'

//EJERCICIO 1
/* const person = {
    name: 'Abraham',
    surname: 'Menéndez'
};

person.name = 'Ana';
console.log(person.name);

delete person.name;
console.log(person.name); */

//EJERCICIO 2

/* const person = {
    name: 'Abraham',
    surname: 'Menéndez'
};

const isEmpty = obj => {
    if(person.name == '') {
        console.log(true);
    }
    
    return console.log(false);
};

isEmpty(); */

//EJERCICIO 3

/* const products = {
    'car': 20,
    'house': 99999,
    'bike': 12
};

const addAllNumbers = () => {
    console.log(`${products.car + products.house + products.bike}`)
};

addAllNumbers(); */

//EJERCICIO 4

/* const width = 200;
const height = 300;
const title = 'Mi menu de navegación'; */

const menu = {
    width: 200,
    height: 300,
    title: 'Mi menu de navegación'
};

const multiplyNumeric = () => {
    if(menu.width !== '' || menu.height !== '' || menu.title !== '') {
        console.log(parseInt(`${menu.width * 2, menu.height * 2 , menu.title * 2}`));
    } else {
        console.log('No se puede realizar la operación');
    }
    
};

multiplyNumeric();