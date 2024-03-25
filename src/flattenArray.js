/**
 * 扁平化多维数组
 * @param {Array} array
 */
function flattenArray(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result.push(...flattenArray(array[i]));
            continue;
        }

        result.push(array[i]);
    }

    return result;
}

console.log(flattenArray([1, 2, 3, [4, 5], 6]));
console.log(flattenArray([1, 2, 3, [4, 5, [6, 7]], 8]));
console.log(flattenArray([1, 2, 3, [4, 5, [6, 7, [8]]], 9]));
