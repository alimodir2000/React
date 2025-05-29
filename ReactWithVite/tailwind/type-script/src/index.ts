// let coffeeType: string = 'espresso 1';
// console.log(coffeeType);

// let shots: number = 2;
// let hasMilk: boolean = true;

// console.log(`I want a ${coffeeType} with ${shots} shots.`);

// let prices: number[] = [2.5, 3.0, 3.5];
// console.log(`The prices are: ${prices.join(', ')}`);

// // let product = {
// //     coffeeType: 'latte',
// //     shots: 3,
// //     hasMilk: true,
// //     price: 3.5
// // }


// let product: { coffeeType: string, shots: number, hasMilk: boolean, price: number } = {
//     coffeeType: 'latte',
//     shots: 3,
//     hasMilk: true,
//     price: 3.5
// }

// console.log(`Product: ${product.coffeeType}, Shots: ${product.shots}, Milk: ${product.hasMilk}, Price: $${product.price}`);

interface Product {
    name: string;
    price: number;
    inStock: boolean;
    description?: string;
}

let keyboard: Product = {
    name: 'Mechanical Keyboard',
    price: 99.99,
    inStock: true,
    description: 'A high-quality mechanical keyboard with customizable RGB lighting.'
};


function calcuateTotla(items: number[], discount?: number): number {
    let total = items.reduce((total,item)=> total + item, 0);
    if (discount) { 
        total -= total * (discount / 100);
    }
    return total;
}

let prices: number[] = [100, 50, 20];
let total = calcuateTotla(prices);
console.log(`Total price after discount: $${total.toFixed(2)}`);

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
    variant: ButtonVariant,
    label: string,
    onClick: () => void;
}

const Button = ({ variant, label, onClick }: ButtonProps) => {
    return `<button class="${variant}" onclick="${onClick}">${label}</button>`;
}

console.log(Button({variant: 'primary', label: 'Click Me', onClick: () => console.log('Button clicked!')}));