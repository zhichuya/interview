/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2023-04-14
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-04-14
 * @FilePath: /interview/memorize.js
 * @Description: 缓存函数: 用于缓存函数的计算结果，当同一个函数同一个参数调用多次时，
 * 除第一次需要计算外，其他都是直接从缓存中取
 */
const memorize = function (func) {
    const memo = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (!memo[key]) {
            memo[key] = func(...args);
        }
        return memo[key];
    };
};

let complexCalc = (a, b) => {
    // 执行计算
    return a + b;
};

let memoCalc = memorize(complexCalc);
console.log(memoCalc(666, 888));
console.log(memoCalc(666, 888)); // 从缓存中获取
