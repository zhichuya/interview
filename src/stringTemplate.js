/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2023-02-02
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-02-02
 * @FilePath: /interview/stringTemplate.js
 * @Description: 实现一个模板字符串
 */

function stringTemplate(template, data) {
    // 正则表示：/\${\s*\w+[\+\-\*\/]?\w+\s*}/g 支持加减乘除表达式 ==> 要想完美支持模板字符串的功能，需要完美匹配js的表达式
    return template.replace(/\${\s*\w+[\+\-\*\/]?\w+\s*}/g, match => {
        let command = match.substring(2, match.length - 1);
        return eval(command);
    });
}
const name = '程远';
const age = 24;
const data = {
    name,
    age
};

const str = '模板字符串：${name}今年：${age}岁，我知道1 + 1 = ${1+1}';
console.log(stringTemplate(str, data));
