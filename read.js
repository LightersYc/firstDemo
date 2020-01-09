// 读取文件流
const fs = require('fs')
var data = ''

const readerStream = fs.createReadStream('1.txt')

readerStream.setEncoding('UTF8')

readerStream.on('data', function (chunk) {
    data += chunk
})
readerStream.on('end', function () {
    console.log('这是1.txt的内容:' + data);
})
readerStream.on('error', function (err) {
    console.log(err.stack);
})
console.log('文件读取成功');