/** 给定两个字符串形式的正整数 num1 和num2 ，计算它们的和并同样以字符串形式返回
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addString = function (num1, num2) {
    const len = Math.max(num1.length, num2.length);
    let result = '';
    let curry = 0;
    num1 = num1.padStart(len, '0');
    num2 = num2.padStart(len, '0');

    for (let i = len - 1; i >= 0; i--) {
        const r = +num1[i] + +num2[i] + curry;
        curry = Math.floor(r / 10);
        result = (r % 10) + result;
    }

    if (curry) {
        result = curry + result;
    }

    return result;
};

console.log(addString('999', '1'));
console.log(addString('100', '1'));
console.log(addString('99', '1'));
console.log(addString('8', '1'));
