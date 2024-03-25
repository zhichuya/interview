const memoFunc = function (func) {
    const cache = {};

    const memoedFunc = (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];

        const result = func(...args);
        return (cache[key] = result);
    };

    return memoedFunc;
};

const add = (a, b) => {
    console.log('add is running');
    return a + b;
};
const calc = memoFunc(add);
console.log(calc(10, 20)); // 30
console.log(calc(10, 20)); // 30
