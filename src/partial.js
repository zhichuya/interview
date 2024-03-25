/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2023-04-14
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-04-14
 * @FilePath: /interview/partial.js
 * @Description: 偏函数：偏函数应用（Partial Application）是指固定一个函数的某些参数，
 * 然后产生另一个更小元的函数偏函数应用是固定一个函数的一个或多个参数，并返回一个可以接收剩余参数的函数。
 */
const partial = function (func, ...preArgs) {
    return function (...nextArgs) {
        const countArgs = [...preArgs, ...nextArgs];
        return func.apply(this, countArgs);
    };
};

function buildUri(scheme, domain, path) {
    return `${scheme}://${domain}/${path}`;
}


const myGithubPath = partial(buildUri, "https", "github.com");
const svelteTodoListPath = myGithubPath("zhichuya/svelte-todoList");
const createFontPath = myGithubPath("zhichuya/create-font");
console.log(svelteTodoListPath, createFontPath);