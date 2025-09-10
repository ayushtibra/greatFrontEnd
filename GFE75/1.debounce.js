// // It is a Technique used to control how many times we allow a function to be executed over time.
// // ex - elevator button to door close
// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/debounce

function debounce(callback, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout); // clear the timeout if the function is called again (see below example)

    // A tricky bit: when you call a function in JavaScript, its this depends on how it’s called.
    // But when you put a function inside setTimeout, it’s called later in a different context (often window or undefined in strict mode).
    // That means "this" could be lost!
    // You may be tempted to use callback(...args) but this will be lost if callback functions are invoked that way. Hence we have use Function.prototype.apply()/Function.prototype.call() which allows us to specify this as the first argument.
    // timeout = setTimeout(() => callback(), delay);

    // Fix below
    timeout = setTimeout(() => callback.apply(this, args), delay);
  };
}

// Example usage for clearTimeout
// const debouncedFunction = debounce(() => {
//   console.log("Function called");
// }, 1000);

// debouncedFunction();
// debouncedFunction();

// // Read this blog to have better understanding of debounce with 'this' - https://www.toptal.com/javascript/debounce-and-throttle-javascript-methods
// // https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e

function sayHello() {
    console.log('My name is', this.name)
  }
  
  const amy = {
    name: 'amy',
    speak: debounce(sayHello),
  }
  
  amy.speak()  // undefined if not used .apply(this, args)

  // Read sol or theory below to have better understanding of debounce with 'this' - 
  // https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/debounce