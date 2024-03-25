/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-02-07
 * @FilePath: /interview/findMax.js
 * @Description: 查找最长的连续出现的字符个数
 */

function findMax(str) {
    if (str.length < 2) {
        return str.length;
    }

    let max = 0;
    let prevIdx = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[prevIdx]) {
            continue;
        } else {
            max = Math.max(max, i - prevIdx);
            prevIdx = i;
        }
    }

    // 防止连续字符出现在最末尾，从而忽略更新max
    if (str[str.length - 1] === str[prevIdx]) {
        max = Math.max(max, str.length - prevIdx);
    }

    return max;
}

console.log(findMax('aaabcccccd')); // 5
console.log(findMax('abccdeeeee')); // 5
console.log(findMax('abccccd')); // 4
