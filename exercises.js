//Exercise 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const multipliedNums = nums.map((num) => {
    return num * 2;
});


//Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondPet] = pizzaToppings;

console.log(firstTopping); 'Pineapple'
console.log(secondTopping); 'Olives'

//Tradtional bracket notation
console.log(pizzaToppings[0]); 'Pineapple'
console.log(pizzaToppings[1]); 'Olives'