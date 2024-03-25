/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/quickSort.js
 * @Description: 快排
 */

const quickSort = function (arr) {
    if (arr.length <= 1) return arr;

    let left = [];
    let right = [];
    let key = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= key) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(key, quickSort(right));
};

console.log(quickSort([2,3,1,4,7,6,5,8,0,9]));