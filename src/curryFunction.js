const curry = function (fn) {
    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function () {
                return curriedFn(...args.concat([...arguments]));
            };
        }
        return fn(...args);
    };
};

const add = (a, b) => {
    return a + b;
};

const curryAdd = curry(add);
console.log(curryAdd(10)(20));
