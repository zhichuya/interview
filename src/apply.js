/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/apply.js
 * @Description: 自定义apply函数
 */

Function.prototype.apply = function (context) {
    context = context || window;
    let result = null;
    context.fn = this;
    if (arguments[1]) {
        result = context.fn(arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;

    return result;
};
