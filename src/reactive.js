const targetMap = new WeakMap();
let activeEffect = null; // 引入 activeEffect 变量

const effect = eff => {
    activeEffect = eff; // 1. 将副作用赋值给 activeEffect
    activeEffect(); // 2. 执行 activeEffect
    activeEffect = null; // 3. 重置 activeEffect
};

const track = (target, key) => {
    if (activeEffect) {
        // 取出target的依赖
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }

        // 添加target依赖的副作用
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = new Set()));
        }
        dep.add(activeEffect);
    }
};

const trigger = (target, key) => {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;

    let dep = depsMap.get(key);
    if (dep) {
        dep.forEach(effect => effect());
    }
};

const reactive = target => {
    const handler = {
        get(target, key, receiver) {
            const value = Reflect.get(target, key, receiver);
            track(target, key);

            return value;
        },
        set(target, key, value, receiver) {
            Reflect.set(target, key, value, receiver);
            trigger(target, key);

            return value;
        },
    };

    return new Proxy(target, handler);
};

const ref = raw => {
    const reactive = {
        get value() {
            track(reactive, 'value');
            return raw;
        },
        set value(val) {
            raw = val;
            trigger(reactive, 'value');
            return val;
        },
    };

    return reactive;
};

let product = reactive({price: 10, quantity: 20});
let name = ref('一月');

effect(() => {
    console.log('price', product.price);
}, false);

effect(() => {
    console.log('quantity', product.quantity);
});

effect(() => {
    console.log('name', name.value);
});

product.quantity = 22;
name.value = 'chengcheng';
