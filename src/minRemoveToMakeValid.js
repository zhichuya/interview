/**
 * 从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，
 * 使得剩下的「括号字符串」有效。
 * 请返回任意一个合法字符串
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        const top = stack[stack.length - 1]?.val;

        if (item === '(') {
            stack.push({val: item, index: i});
            continue;
        }

        if (item === ')' && top === '(') {
            stack.pop();
            continue;
        }

        if (item === ')') {
            stack.push({val: item, index: i});
            continue;
        }
    }
    const delIdx = stack.map(item => item.index);
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (delIdx.includes(i)) continue;

        result = result + s[i];
    }

    return result;
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
console.log(minRemoveToMakeValid('a)b(c)d'));
console.log(minRemoveToMakeValid('))(('));
