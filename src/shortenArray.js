/**
 * 将超过一个的连续数字元素，合并成 x->y，比如 [1,2,3,4] 转成 ['1->4']
 * 将非连续的数字元素，转成字符串
 * @param {Array} arr
 */
function shortenArray(arr) {
    const result = [];
    let start = 0;
    let end = 0;
    const pushResult = (start, end) => {
        if (start === end) {
            result.push(`${arr[start]}`);
            return;
        }

        result.push(`${arr[start]}->${arr[end]}`);
    };
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        if (arr[end] + 1 === curr) {
            end = i;
            continue;
        }
        pushResult(start, end);
        start = i;
        end = i;
    }
    pushResult(start, end);

    return result;
}

console.log(shortenArray([1, 2, 3, 4, 6, 7, 9, 13, 15])); // ['1->4','6->7','9','13','15']
