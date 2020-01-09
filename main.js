// const fs = require('fs')

// fs.readFile('2.txt', (err, data) => {
//     if (err) {
//         console.log(err.stack);
//         return
//     }
//     console.log(data.toString());
// })
// console.log('程序结束了');


// 事件
const events = require('events')
const eventEmitter = new events.EventEmitter()

// 事件1
var test1 = function test1() {
    console.log('监听器test1执行');
}
// 事件2
var test2 = function test2() {
    console.log('监听器test2执行');
}

// 绑定事件
eventEmitter.on('testHandle', test1)
eventEmitter.addListener('testHandle', test2)

var count = eventEmitter.listenerCount('testHandle')
console.log(count + '个监听器');

// 触发事件
eventEmitter.emit('testHandle')

// 移除test1
eventEmitter.removeListener('testHandle', test1)

var count = eventEmitter.listenerCount('testHandle')
console.log(count + '个监听器');

eventEmitter.emit('testHandle')

console.log('程序执行完毕');


