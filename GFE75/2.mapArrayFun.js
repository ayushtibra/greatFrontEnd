// Build map polyfill prototype using javascript

Array.prototype.myMap = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            // result.push(callback(this[i])) // callback has three arguments - value, index, array
            // result.push(callback(this[i], i, this)); // callback has three arguments - value, index, array
            result.push(callback.call(thisArg, this[i], i, this)); // callback has three arguments - value, index, array and thisArg is the this value
            // but thisArg is optional and if not provided, it will be undefined and for arrow function, thisArg is the this value of the outer scope so we can use arrow function without thisArg

            // or if instead of call, we use apply, we need to pass the arguments as an array
            // result.push(callback.apply(thisArg, [this[i], i, this]));
        }
    }
    return result;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.myMap((number) => {
    return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// or ------------------------------------------------------------

const obj = { multiplier: 4 };

const arr = [1, 2, 3];

const result = arr.myMap(function(num) {
  return num * this.multiplier;
}, obj);

console.log(result); // [2, 4, 6]

// or  with arrow function ------------------------------------------------------------

const newarr = [1, 2, 3];
const result2 = newarr.myMap((num) => num * this.multiplier, obj);

console.log(result); // [NaN, NaN, NaN]

// Read sol or theory below to have better understanding of map with 'this' - 
// https://www.greatfrontend.com/questions/javascript/array-map
