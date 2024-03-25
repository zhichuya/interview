/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2023-02-02
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-02-02
 * @FilePath: /wiki-react-diff/Users/chengyuan06/Desktop/chengyuan/fe/interview/array2tree.js
 * @Description: 将打平的数组，转为树形数组
 */
var array = [
    {id: 1, parent: 0},
    {id: 2, parent: 0},
    {id: 3, parent: 0},
    {id: 4, parent: 3},
    {id: 5, parent: 3},
    {id: 6, parent: 5},
    {id: 7, parent: 6}
];

const array2tree = arr => {
    return arr
        // 先找到每个元素的children
        .map(item => {
            item.children = arr.filter(child => {
                return child.parent === item.id;
            });
            return item;
        })
        // 只保留顶级节点的元素，防止重复元素
        .filter(item => {
            if (item.parent === 0) {
                return item;
            }
        });
};

console.log(JSON.stringify(array2tree(array)));
