function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let a = randomSkaicius(1, 500);
let b = randomSkaicius(1, 500);

import { add } from './methods/calculator.js';
import { deduct } from './methods/calculator.js';
import { multiply } from './methods/calculator.js';
import { divide } from './methods/calculator.js';
console.log("Suma: " + add(a, b));
console.log("Skirtumas: " + deduct(a, b))
console.log("Sandauga: " + multiply(a, b))
console.log("Dalyba: " + divide(a, b))