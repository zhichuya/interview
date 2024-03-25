/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-10-31
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: proxy.js
 * @Description: Proxy实现响应式数据
 */
const data = {text: '初始化数据', name: '程远'};

let activeEffect = null;
const effect = fn => {
    if (!fn) return;
    // 将依赖函数fn赋值给 activeEffect 解耦函数名
    activeEffect = fn;
    fn();
};

// 存放依赖函数的桶
const bucket = new WeakMap();

const obj = new Proxy(data, {
    get(target, key) {
        if (!activeEffect) return target[key];

        // 取出target
        let depsMap = bucket.get(target);
        if (!depsMap) {
            bucket.set(target, (depsMap = new Map()));
        }

        // 取出 target => key => 依赖函数
        let deps = depsMap.get(key);
        if (!deps) {
            depsMap.set(key, (deps = new Set()));
        }

        // 追加依赖
        deps.add(activeEffect);
        activeEffect = null;

        return target[key];
    },

    set(target, key, value) {
        target[key] = value;

        // 取出 target
        const depsMap = bucket.get(target);
        if (!depsMap) return value;

        // 去除 target => key => 依赖函数
        const deps = depsMap.get(key);
        if (!deps) return value;

        // 遍历依赖函数
        deps.forEach(fn => fn());

        return value;
    }
});

effect(() => {
    console.log('effect 1',obj.text);
});

effect(() => {
    console.log('effect 2',obj.text);
});
obj.text = 123;
obj.text = 456;