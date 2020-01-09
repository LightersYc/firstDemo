// 写入文件流
const fs = require('fs')
const data = '这是写入output.txt文件里的内容'

// 创建一个可以写入的流，写入到文件 output.txt 中
const writerStream = fs.createWriteStream('output.txt')

// // 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

writerStream.on('finish', function () {
    console.log('文件写入完成');
})

writerStream.on('error', function (err) {
    console.log(err);
})

// fs.unlink('fileOut.txt',function(){
//     console.log('文件删除成功');
// })