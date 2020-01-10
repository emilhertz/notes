//  Higher-order function that returns a function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

let doubleMe = createMultiplier(2);
let trippleMe = createMultiplier(10000);

// console.log(trippleMe(45.7282));

// forEach is an array-method, which is also a higher-order function, because it takes a function as a parameter
let animals = ['Elephant', "Giraf", `Seahorse`];

//animals.forEach(animalDescription);

function animalDescription(animal) {
    console.log(`The ${animal} is an awesome animal!`);
}

// array filter method

const numbers = [1, -2, 3, -0.1];

let newNumbers = numbers.filter(value => value >= 2 );

//console.log(newNumbers);

// array map method
let people = [`Jens`, `Bertel`, `Ole`];

const web = people.map(name => '<li>' + name + '</li>');

const html = '<ul>' + web.join(' ') + '</ul>';

//console.log(html);

// array sort method


// cat-klasse

class Cat {
    constructor(name) {
        this.name = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.lonliness = 0;
        this.happiness = 0;
    }
    sleep() {
        this.tiredness--;
    }
    eat() {
        this.hunger--;
    }
    pet() {
        this.lonliness--;
    }
    time() {
        this.happiness--;
    }
    run() {
        this.tiredness++;
        this.hunger++;
        this.happiness++;
        this.lonliness++;
    }
    status() {
        console.log(`${this.name} is a ${this.tiredness} tired cat. He is also a cat with ${this.hunger} hunger, with ${this.lonliness} loneliness and ${this.happiness} happiness.`);
    }
}

let Leif = new Cat('Leif');

Leif.run();

Leif.status();