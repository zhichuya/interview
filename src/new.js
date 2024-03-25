/**
 * new关键字主要做了以下的工作：
 * 创建一个新的对象obj
 * 将对象与构建函数通过原型链连接起来
 * 将构建函数中的this绑定到新建的对象obj上
 * 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
 */

function NewObject(constructor, ...args) {
    if (typeof constructor !== 'function') {
        throw new Error('constructor is must be a function');
    }

    let obj = {};
    obj.__proto__ = constructor.prototype;
    let result = constructor.call(obj, args);
    return result instanceof Object? result : obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(this.name);
};

const person = NewObject(Person, 'Tom', 20);
console.log(person); // Person {name: "Tom", age: 20}
person.sayName(); // 'Tom'
