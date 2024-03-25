/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/imageAsync.js
 * @Description: 异步加载图片
 */

const imageAsync = function (url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => {
            resolve(image);
        };
        image.onerror = err => {
            reject(err);
        };
    });
};
