/**
 * 数组转树形结构
 * @param {array} array 被转换的数组
 * @param {number|string} root 根节点（最外层节点）
 * @returns array
 */
const arrayToTree = function (array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        curr.children || (curr.children = []);

        if (curr.pid === 0) {
            result.push(curr);
            continue;
        }
        const parent = array.find(parent => parent.id === curr.pid);
        parent.children ? parent.children.push(curr) : (parent.children = [curr]);
    }

    return result;
};

const array = [
    {id: 12, pid: 1, name: '朝阳区'},
    {id: 241, pid: 24, name: '田林街道'},
    {id: 31, pid: 3, name: '广州市'},
    {id: 13, pid: 1, name: '昌平区'},
    {id: 2421, pid: 242, name: '上海科技绿洲'},
    {id: 21, pid: 2, name: '静安区'},
    {id: 242, pid: 24, name: '漕河泾街道'},
    {id: 22, pid: 2, name: '黄浦区'},
    {id: 11, pid: 1, name: '顺义区'},
    {id: 2, pid: 0, name: '上海市'},
    {id: 24, pid: 2, name: '徐汇区'},
    {id: 1, pid: 0, name: '北京市'},
    {id: 2422, pid: 242, name: '漕河泾开发区'},
    {id: 32, pid: 3, name: '深圳市'},
    {id: 33, pid: 3, name: '东莞市'},
    {id: 3, pid: 0, name: '广东省'},
];

console.log(JSON.stringify(arrayToTree(array)));
