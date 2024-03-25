/**
 * @file 返回一个 Promise，并在 ms 毫秒后 Promise 变为完成状态
 */

function sleep(ms) {
    return new Promise(resolve => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            resolve();
        }, ms);
    });
}

async function main() {
    console.log('a');
    await sleep(1000);
    console.log('b');
    await sleep(1000);
    console.log('c');
}
main();
