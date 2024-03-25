Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const result = [];
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(
                value => {
                    count++;
                    result[i] = value;
                    if (count >= promises.length) {
                        resolve(result);
                    }
                },
                reason => {
                    reject(reason);
                }
            );
        }
    });
};

const promises = [Promise.reject(1), Promise.resolve(2), Promise.resolve(3)];

console.log(
    Promise.all(promises).then(
        values => console.log(values),
        reason => console.log(reason)
    )
);
