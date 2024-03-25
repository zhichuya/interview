/**
 * 查找label中的包含路径，如比：搜索西二旗，得到['北京/海淀区/西二旗街道']
 */

const data = [
    {
        pid: 0,
        id: 1,
        label: '北京',
    },
    {
        pid: 1,
        id: 2,
        label: '海淀区',
    },
    {
        pid: 2,
        id: 3,
        label: '西二旗街道',
    },
    {
        pid: 2,
        id: 4,
        label: '西三旗街道',
    },
    {
        pid: 2,
        id: 5,
        label: '中关村街道',
    },
    {
        pid: 0,
        id: 6,
        label: '重庆',
    },
    {
        pid: 6,
        id: 7,
        label: '沙坪坝区',
    },
    {
        pid: 7,
        id: 8,
        label: '三峡广场',
    },
    {
        pid: 7,
        id: 9,
        label: '虎溪街道',
    },
    {
        pid: 6,
        id: 10,
        label: '江北区',
    },
    {
        pid: 10,
        id: 11,
        label: '石马河街道',
    },
];

function searchPath(data, keyword) {
    if (!data.length) return [];

    const result = [];
    const findParent = node => {
        if (node.pid === 0) return node;

        const parentNode = data.find(item => {
            return node.pid === item.id;
        });
        return parentNode;
    };

    data.forEach(item => {
        if (item.label.indexOf(keyword) === -1) return;

        if (item.pid === 0) {
            result.push(item.label);
            return;
        }

        let path = item.label;
        let parentNode = findParent(item);
        while (parentNode && parentNode.pid !== 0) {
            path = parentNode.label + '/' + path;
            parentNode = findParent(parentNode);
        }
        path = parentNode.label + '/' + path;

        result.push(path);
    });

    return result;
}

console.log(JSON.stringify(searchPath(data, '区')));
console.log(JSON.stringify(searchPath(data, '北京')));
console.log(JSON.stringify(searchPath(data, '西二旗')));
console.log(JSON.stringify(searchPath(data, '石马河')));
