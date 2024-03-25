/**
 * 把树形结构的节点扁平化为拥有pid表示父节点的id，id表示自己的
 */

const data = [
    {
        label: '北京',
        children: [
            {
                label: '海淀区',
                children: [
                    {
                        label: '西二旗街道',
                        children: [],
                    },
                    {
                        label: '西三旗街道',
                        children: [],
                    },
                    {
                        label: '中关村街道',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        label: '重庆',
        children: [
            {
                label: '沙坪坝区',
                children: [
                    {
                        label: '三峡广场',
                        children: [],
                    },
                    {
                        label: '虎溪街道',
                        children: [],
                    },
                ],
            },
            {
                label: '江北区',
                children: [
                    {
                        label: '石马河街道',
                        children: [],
                    },
                ],
            },
        ],
    },
];

function flattenTree(data) {
    if (!data) return [];

    let id = 1;
    const result = [];
    const exec = (node, pid) => {
        if (!node) return;
        const currId = id++;
        const children = node.children || [];
        result.push({pid, id: currId, label: node.label});

        children.forEach(item => {
            exec(item, currId);
        });
    };

    data.forEach(item => {
        exec(item, 0);
    });

    return result;
}

console.log(JSON.stringify(flattenTree(data)));