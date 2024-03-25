/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/call.js
 * @Description: 自定义 call方法
 */

Function.prototype.call = function(context) {
    context = context || window;
    const args = arguments.slice(1, arguments.length);
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;

    return result;
}