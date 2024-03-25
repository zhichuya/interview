/**
 * 给定一个符合major版本号规范的数组，对版本号数组进行排序
 * @param {Array} list
 */
function sortVersion(list) {
    list.sort((a, b) => {
        const aList = a.split('.');
        const bList = b.split('.');
        for (let i = 0; i < aList.length; i++) {
            if (+aList[i] === +bList[i]) continue;

            if (+aList[i] < +bList[i]) return -1;

            return 1;
        }
    });

    return list;
}

console.log(sortVersion(['0.1.1', '2.3.3', '0.32.1', '4.2.9', '2.3.3', '4.3.5', '4.3.9']));
