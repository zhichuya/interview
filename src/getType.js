const getType = function (target) {
    let type = typeof target;

    // 基本数据类型
    if (type !== 'object') {
        return type;
    }

    const objectType = Object.prototype.toString.call(target);

    // 自定义类的实例对象
    if (objectType === '[object Object]') {
        return Object.getPrototypeOf(target).constructor.name;
    }

    // 内置对象
    return objectType.replace(/^\[object (\S+)\]$/, '$1');
};

const Person = function () {};

console.log(getType([])); // Array
console.log(getType('123')); // string
console.log(getType(null)); // Null
console.log(getType(undefined)); // undefined
console.log(getType()); // undefined
console.log(getType(function () {})); // function
console.log(getType(/123/g)); // RegExp
console.log(getType(new Person()));
