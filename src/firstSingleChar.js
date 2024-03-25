/**
 * 找出字符串中第一个只出现一次的字符
 * @param {String} str
 */
function firstSingleChar(str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
            continue;
        }

        map.set(char, 1);
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (map.get(char) === 1) {
            return char;
        }
    }
}

console.log(firstSingleChar('hello hell'));
console.log(firstSingleChar('oom'));
console.log(firstSingleChar('java'));