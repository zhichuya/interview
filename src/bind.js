/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/bind.js
 * @Description: 自定义 bind函数
 */

Function.prototype.bind = function (context) {
    context = context || window;
    context.fn = this;
    let args = arguments.slice(1);

    return function (...newArgs) {
        const result = context.fn(...args, ...newArgs);
        delete context.fn;
        return result;
    };
};
