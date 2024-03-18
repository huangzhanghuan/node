const { promisify } = require('util')

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo.config.js')
const { commandSpawn } = require('../utils/terminal.ts')

// callback -> promisify(函数) -> Promise -> async await
const createProjectAction = async (project) => {
    console.log("why helps you create your project~");

    // 1.clone项目
    await download(vueRepo, project, { clone: true });
    
    // 2.执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${project}` });

    // 3.运行项目 npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });
}

const addCpnAction = (name, dest) => {
    
    
}



module.exports = {
    createProjectAction
}