/*
 * @Author: chengcheng
 * @Date: 2023-08-29
 * @LastEditors: 2023-08-29
 * @LastEditTime: 2023-08-29
 * @FilePath: /chengcheng/interview/getOrderUrls.js
 * @Description:
 */

// 1. 给定一个菜单数据，结构如下：
// 请实现一个函数，返回一个包含所有完整菜单路径url的数组：['a/b/c', 'a/c/e', ...]
// 输出：
// [
//     '/business/product-reporting',
//     '/business/offerlist',
//     '/product/certification/cert1',
//     '/product/certification/cert2',
//     '/product/catalog',
//     '/order'
//   ]

let data = [
    {
        url: '/business',
        name: '商务',
        children: [
            {
                url: '/product-reporting',
                name: '产品申报',
                children: []
            },
            {
                url: '/offerlist',
                name: '报价列表',
                children: []
            }
        ]
    },
    {
        url: '/product',
        name: '产品',
        children: [
            {
                url: '/certification',
                name: '产品包装认证',
                children: [
                    {
                        url: '/cert1',
                        name: '包装认证1',
                        children: []
                    },
                    {
                        url: '/cert2',
                        name: '包装认证2',
                        children: []
                    }
                ]
            },
            {
                url: '/catalog',
                name: '产品类目',
                children: []
            }
        ]
    },
    {
        url: '/order',
        name: '订单',
        children: []
    }
];

function getOrderUrl(data) {
    let result = [];

    function dfs(data, path) {
        if (data.length === 0) {
            return path;
        }
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.children.length === 0) {
                result.push(path + item.url);
            } else {
                let child = dfs(item.children, path + item.url);
                if (child?.length > 0) {
                    result.push(child);
                }
            }
        }
        return '';
    }

    dfs(data, '');

    return result;
}

console.log(getOrderUrl(data));
