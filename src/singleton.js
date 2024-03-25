/**
 * 实现一个单例模式
 * @param {Function} func
 * @returns
 */
const Singleton = function (func) {
    let instance = null;

    return function (...args) {
        if (instance) {
            return instance;
        }

        instance = func(...args);
        return instance;
    };
};

function Person(name) {
    return {name};
}

const SingletonPerson = Singleton(Person);
const personOne = SingletonPerson('一月');
const personTwo = SingletonPerson('chengyuan');

console.log(personOne);
console.log(personTwo);
console.log(personOne === personTwo);
