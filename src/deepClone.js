function deepClone(target, map = new WeakMap()) {
    if (typeof target !== 'object') return target;
    if (target instanceof Date) return new Date(target);
    if (target instanceof RegExp) return new RegExp(target);

    if (map.get(target)) {
        return map.get(target);
    }

    const clone = Array.isArray(target) ? [] : {};
    map.set(target, clone);
    for (let key in target) {
        clone[key] = deepClone(target[key]);
    }

    // 处理Symbol类型
    let symKeys = Object.getOwnPropertySymbols(target);
    for (let i = 0; i < symKeys.length; i++) {
        clone[symKeys[i]] = deepClone(target[symKeys[i]]);
    }

    return clone;
}

const obj = {
    sex: '男',
    hobby: ['coding', 'sleep'],
    name: {
        first: '一',
        last: '月',
    },
};

const cloneObj = deepClone(obj);
cloneObj.hobby.pop();
console.log(cloneObj);
