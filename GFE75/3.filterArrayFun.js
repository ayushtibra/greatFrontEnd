Array.prototype.myFilter = function (callbackFn, thisArg) {
    // throw 'Not implemented!';
    const result = [];
    for(let i = 0; i<this.length; i++){
      if(Object.hasOwn(this, i)){
        const element = this[i];
        if(callbackFn.call(thisArg, element, i, this)){
            // result[i] = element; // if we want to return the same length of the array
            result.push(element);
        }
      }
    }
  
    return result;
  };

  // Example usage
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.myFilter((number) => {
    return number > 2;
});
console.log(doubled); // [3, 4, 5]