Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(
                value => resolve(value),
                reason => reject(reason)
            );
        }
    });
};

const promises = [
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(1);
        }, 1000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(2);
        }, 1100)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => {
            reject(0);
        }, 1200)
    ),
];

console.log(
    Promise.race(promises).then(
        value => console.log(value),
        reason => console.log(reason)
    )
);
