const  fs = require('fs')
const path = require('path')

// 1. 创建文件夹
const dirname = 'why.txt'
if(!fs.existsSync(dirname)){
    fs.mkdir(dirname, err=>{
        console.log(err);
    })
}


// 2. 读取文件夹中的所有文件
fs.readdir(dirname, (err, files) =>{
    console.log(files);
})

//递归读取文件夹中所有内容
function getFiles(dirname){
    fs.readdir(dirname, (err, files)=>{
        for(let file of files){
            if(file.isDirectory){
                const filepath = path.resolve(dirname, file.name)
                getFiles(file.name); 
            }else{
                console.log(file.name);
            }
        } 
    })
}


// 3.重命名
fs.rename("./abc.txt", './aaa.txt', err=>{
    console.log(err)
})
