/**
 * 检查括号是否正确匹配
 * @param {string} str
 */
function isValidBracket(str) {
    if (str.length % 2 === 1) return false;
    const left = ['(', '[', '{'];
    const right = [')', ']', '}'];
    const stack = [];
    let hasLeft = false;

    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        if (left.includes(item)) {
            stack.push(item);
            hasLeft = true;
        }

        if (right.includes(item)) {
            const leftTop = stack.pop();
            if (leftTop === undefined) return false;
            if (leftTop === '(' && item !== ')') return false;
            if (leftTop === '[' && item !== ']') return false;
            if (leftTop === '{' && item !== '}') return false;
        }
    }

    return stack.length === 0 && hasLeft;
}

console.log(isValidBracket('()'));
console.log(isValidBracket('()[]{}'));
console.log(isValidBracket('({[]})'));

console.log(isValidBracket('(]'));
console.log(isValidBracket('){'));
console.log(isValidBracket('()]'));
console.log(isValidBracket('([)]'));
console.log(isValidBracket('()))'));
console.log(isValidBracket('(){}}{'));
