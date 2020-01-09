//通过管道流去读文件然后写入另一文件
const fs = require('fs')

const readerStream = fs.createReadStream('file.txt')
const writerStream = fs.createWriteStream('fileOut.txt')

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream)
console.log('执行完毕');

