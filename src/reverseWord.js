/**
 * 反转单词同时满足
 * 1、去除首尾空格
 * 2、单词间隔中多个空格变成一个
 * @param {String} words
 */
function reverseWord(words) {
    return words
        .split(' ')
        .reverse()
        .filter(item => item !== '')
        .join(' ');
}

console.log(reverseWord('a good   example'));
console.log(reverseWord('the sky is blue'));
console.log(reverseWord('  hello world  '));