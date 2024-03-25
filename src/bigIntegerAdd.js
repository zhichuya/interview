/*
 * @Author: zhichuya 1830695417@qq.com
 * @Date: 2023-11-19
 * @LastEditors: zhichuya 1830695417@qq.com
 * @LastEditTime: 2023-11-19
 * @FilePath: /interview/src/bigIntegerAdd.js
 * @Description: 字符串类型的大整数相加
 */
function addBigInteger(a, b) {
    if (a.length <= 0 || b.length <= 0) return '';

    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');
    let cray = 0;
    let result = '';
    for (var i = maxLen - 1; i >= 0; i--) {
        const sum = +a[i] + +b[i] + cray;
        const mod = sum % 10;
        result = mod + result;
        cray = Math.floor(sum / 10);
    }

    cray && (result = cray + result);

    return result;
}

console.log(addBigInteger('123456789', '987654321'));
