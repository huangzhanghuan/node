const message = "你好啊";

// 对中文进行编码
const buffer = Buffer.from(message, 'utf16le');
console.log(buffer);

// 对字节进行解码：默认utf8
console.log(buffer.toString('utf16le'));
