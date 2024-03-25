/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/thro.js
 * @Description: 函数节流是指规定一个单位时间，
 * 在这个单位时间内，只能有一次触发事件的回调函数执行，
 * 如果在同一个单位时间内某事件被触发多次，只有一次能生效。
 */

const throttle = function (func, delay) {
    let timestamp = +new Date();

    return function (...args) {
        let newTimestamp = +new Date();
        if((newTimestamp - timestamp) < delay) {
            func.apply(this, args);
            timestamp = +new Date();
        }
    }
}