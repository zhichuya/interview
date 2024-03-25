/**
 * 合并两个有序数组
 * @param {Array} arr1
 * @param {Array} arr2
 */
function mergeSortArray(arr1, arr2) {
    const minLength = Math.min(arr1.length, arr2.length);
    const result = [];
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < minLength && idx2 < minLength) {
        if (arr1[idx1] <= arr2[idx2]) {
            result.push(arr1[idx1++]);
            continue;
        }

        result.push(arr2[idx2++]);
    }

    while (idx1 < arr1.length) {
        result.push(arr1[idx1++]);
    }

    while (idx2 < arr2.length) {
        result.push(arr2[idx2++]);
    }

    return result;
}

console.log(mergeSortArray([1, 2], [2, 5, 6]));
console.log(mergeSortArray([1, 2, 3], [2, 5, 6]));
console.log(mergeSortArray([1, 2, 3, 4], [2, 5, 6]));
