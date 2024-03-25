/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2023-02-05
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2023-02-05
 * @FilePath: /interview/promise.js
 * @Description: 简易的promise：时间匆忙因为this的指向问题把 resolve、reject、then 方法都写在了 construct里面
 */

class Promise {
    constructor(executer) {
        this.status = 'pending';
        this.result = undefined;
        this.reason = undefined;

        this.resolve = result => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.result = result;
            }
        };

        this.reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        };

        this.then = (resolve, reject) => {
            setTimeout(() => {
                if (this.status !== 'pending' && this.status === 'resolved') {
                    resolve(this.result);
                }

                if (this.status !== 'pending' && this.status === 'rejected') {
                    reject(this.reason);
                }
            }, 0);
        };

        executer(this.resolve, this.reject);
    }
}

let promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        if (Date.now() % 2) {
            resolve('成功了');
        } else {
            reject('失败了');
        }
        console.log(3);
    });
});

promise.then(
    result => {
        console.log(result);
    },
    reject => {
        console.log(reject);
    }
);

console.log(2);
