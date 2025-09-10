// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/array-reduce

Array.prototype.myReduce = function (callbackFn, thisArg) {
    const noInitialValue = thisArg === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acc = noInitialValue ? this[0] : thisArg;
  let startingIndex = noInitialValue ? 1 : 0;

  // let result = initialValue;

    for(let i = startingIndex; i<this.length; i++){
        if(Object.hasOwn(this, i)){
           acc = callbackFn.call(thisArg, acc, this[i], i, this);
        }
    }

    return acc;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.myReduce((acc, curr) => {
    return acc + curr;
}, 10);
console.log(sum);