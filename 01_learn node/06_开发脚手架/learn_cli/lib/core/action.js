const { promisify } = require('util')

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo.config')

// callback -> promisify(函数) -> Promise -> async await
const createProjectAction = async(project)=>{
    // 1.clone项目
    await download();
    
    // 2.执行npm install
    // 3.运行项目 npm run serve
    // 4.打开浏览器
}

module.exports = {
    createProjectAction
}