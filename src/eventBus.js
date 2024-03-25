/*
 * @Author: chengyuan06 chengyuan06@baidu.com
 * @Date: 2022-11-13
 * @LastEditors: chengyuan06 chengyuan06@baidu.com
 * @LastEditTime: 2022-11-13
 * @FilePath: /interview/eventBus.js
 * @Description: 事件总线
 */

/**
 * 调用示例
 * const eventBus  = new EventBus();
 * eventBus.on('click',()=>{
 *  console.log('trigger click 1');
 * });
 *
 * eventBus.on('click',()=>{
 *  console.log('trigger click 2');
 * });
 *
 * eventBus.on('doubleClick',()=>{
 *  console.log('trigger doubleClick 1');
 * });
 *
 * eventBus.emit('click');
 * eventBus.emit('doubleClick');
 */

class EventBus {
    constructor() {
        this.handlers = {};
    }

    on(eventName, handlers) {
        const event = this.handlers[eventName];
        if (event) {
            this.handlers[eventName].push(handlers);
        } else {
            this.handlers[eventName] = [handlers];
        }
    }

    emit(eventName) {
        const handlers = this.handlers[eventName];
        handlers.forEach(handler => {
            handler();
        });
    }

    removeEvent(eventName, handler) {
        const handlers = this.handlers[eventName];
        const idx = handlers.indexOf(handler);

        if (idx !== -1) {
            this.handlers[eventName].splice(idx, 1);
        }
        if (this.handlers[eventName].length === 0) {
            delete this.handlers[eventName];
        }
    }
}

const eventBus = new EventBus();
eventBus.on('click', () => {
    console.log('trigger click 1');
});

eventBus.on('click', () => {
    console.log('trigger click 2');
});

eventBus.on('doubleClick', () => {
    console.log('trigger doubleClick 1');
});
eventBus.emit('click');
eventBus.emit('doubleClick');
