export class Boat {
    floats = true;
}

export class Car {
    rolls = true;
}

export function instanceOfExpample(x: Boat | Car) {
    if (x instanceof Boat) {
        x.floats;
    } else {
        x.rolls;
    }
}

export class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string){
        super(name);
        this.breed = breed;
    }
}

export function isDog(animal: Animal) : boolean {
    if(animal instanceof Dog)
        return true;
    return false;
}