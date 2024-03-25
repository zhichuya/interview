/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/debouch.js
 * @Description: 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
 */

const debouch = function (func, delay) {
    let timer = null;
    return function (...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(this, args);
        }, delay);
    };
};
