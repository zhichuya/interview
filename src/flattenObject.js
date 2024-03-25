/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2023-02-08
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-02-08
 * @FilePath: /interview/flattenObject.js
 * @Description: 对象扁平化
 */

function flattenObject(obj) {
    let result = {};

    const dfs = function (target, props) {
        // target是基本数据类型
        if (!(target instanceof Object)) {
            result[props] = target;
            return;
        }
        //  target是数组
        if (Array.isArray(target)) {
            for (let i = 0; i < target.length; i++) {
                dfs(target[i], props + '[' + i + ']');
            }
        }
        //  target是对象
        if (target instanceof Object) {
            for (const key in target) {
                const newProp = props ? props + '.' + key : key;
                dfs(target[key], newProp);
            }
        }
    };
    dfs(obj, '');
    return result;
}

const obj = {
    a: {
        b: 1
    },
    c: [1]
};

console.log(flattenObject(obj)); // { 'a.b': 1, 'c[0]': 1, 'c.0': 1 }
