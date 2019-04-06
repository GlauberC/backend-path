const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const directoryPath = path.join(__dirname, 'Folder')
const directoryPath2 = path.join(__dirname, 'JSONFolder')
var fileJSON = []
var JSONfile = [[{"name":"file1","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder"},{"name":"file4","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder"},{"name":"folder2","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder","children":[{"name":"file2","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder/folder2"},{"name":"file3","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder/folder2"}]},{"name":"folder3","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder","children":[{"name":"file5","dir":"/home/glauberc/Workspace/Backend/2-treino/Folder/folder3"}]}]]


app.get('/jsontodir', (req, res) => {
    // fs.writeFile(directoryPath2+'/test.js',)

    function createAllFiles(dir, VarJSON){
        let array = []
        if(VarJSON[0].length){
            array = VarJSON[0]
        }else{
            array = VarJSON
        }
        array.map(fileDir => {
            if(fileDir.children){
                newDir = dir + '/' + fileDir.name
                fs.mkdirSync(newDir, { recursive: false }, (err) => {
                    if (err) throw err;
                });
                createAllFiles(newDir, fileDir.children)
            }else{
                fs.writeFile(dir+ '/' + fileDir.name)
            }
        })
    }
    createAllFiles(directoryPath2, JSONfile)
    res.send(JSONfile)
    
})

















app.get('/dirtojson', (req, res) => {
    
    function readAllFiles(dir, VarJSON){
        let count = 0
        fs.readdir(dir, (err, files) => {
            files.forEach( (fileDir) => {
                if(fs.lstatSync(dir + '/' + fileDir).isDirectory()){
                    VarJSON.push({name: fileDir, dir: dir , children: []})
                    readAllFiles(dir + '/' + fileDir, VarJSON[count].children)
                    count += 1
                }else{
                    VarJSON.push({name: fileDir, dir: dir})
                    count += 1
                }
            })
        })
    }
    readAllFiles(directoryPath, fileJSON)
    setTimeout(() => {
        res.send(fileJSON)
        fileJSON = []
    }, 3000)

    console.log('------------------------------------------------------------')
    

})

app.listen(3000, ()=>{
    console.log('localhost://3000')
})