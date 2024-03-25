/**
 * 实现传入一个函数，使得每个interval毫秒执行一次fn，重复执行repeat次
 * @param {Function} fn
 * @param {Number} repeat
 * @param {Number} interval
 */
function createRepeat(fn, repeat, interval) {
    let execCount = 0;
    return function (...args) {
        const timer = setInterval(function () {
            if (execCount === repeat) {
                clearInterval(timer);
                return;
            }
            fn(...args);
            execCount++;
        }, interval);
    };
}

const fn = createRepeat(console.log, 3, 1000); // 每隔1000执行一次log函数，一共重复执行3次

fn('hello world');
