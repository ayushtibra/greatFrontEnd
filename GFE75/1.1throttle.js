// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/throttle

const throttle = (callback, delay) => {
    let shouldThrottle = false;

    return function (...args) {
        if (shouldThrottle) {
        return;
        }

        shouldThrottle = true;
        setTimeout(function () {
            shouldThrottle = false;
        }, delay);

        callback.apply(this, args);
    };

}

// Some examples of where throttle is used:
// Resize events
// API calls during window resizing
// Button spam protection
// Autocomplete suggestions

// how to use throttle in scroll event
window.addEventListener('scroll', throttle(function () {
    console.log('scroll');
}, 1000));

// https://css-tricks.com/debouncing-throttling-explained-examples/
