class EventEmitter {
    constructor() {
        this.eventMap = new Map();
    }

    on(eventName, callback) {
        const callbackList = this.eventMap.get(eventName) || [];
        callbackList.push(callback);
        this.eventMap.set(eventName, callbackList);
    }

    emit(eventName, ...args) {
        let callbackList = [];
        if (!eventName) {
            callbackList = this.eventMap.values() || [];
        }

        callbackList = this.eventMap.get(eventName) || [];
        callbackList.forEach(callback => {
            callback(...args);
        });
    }

    removeListener(eventName, callback) {
        const callbackList = this.eventMap.get(eventName) || [];
        const removedList = [];
        callbackList.forEach(item => {
            item !== callback && removedList.push(item);
        });
        this.eventMap.set(eventName, removedList);
    }

    eventNames() {
        return this.eventMap.keys();
    }
}
const emitter = new EventEmitter();

const eventOne = () => {
    console.log('第一个event事件 触发了！');
};
const eventTwo = () => {
    console.log('第二个event事件 触发了！');
};
const loadOne = () => {
    console.log('第一个handleLoad事件 触发了！');
};
const loadTwo = () => {
    console.log('第二个handleLoad事件 触发了！');
};

emitter.on('event', eventOne);
emitter.on('event', eventTwo);
emitter.emit('event');

emitter.on('onload', loadOne);
emitter.on('onload', loadTwo);
emitter.emit('onload');

emitter.emit();
emitter.removeListener('event', eventTwo);
emitter.emit('event');
