#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const readline = require('readline')

const args = process.argv.slice(2)

try {
    fs.writeFileSync('./app/position.txt','') // clear report

    if (args.length == 0){
        throw 'Filename is required'
    }
    let path = `./data/${args[0].trim()}`
    if (!fs.existsSync(path)) {
        throw `${path} doesn't exist`
    }   

    const readInterface = readline.createInterface({
        input: fs.createReadStream(path),
        console: false
    })

    readInterface.on('line', function(line) {
        const stdout = execSync(line).toString().trim()
        if (stdout !== ''){
            console.log(stdout)
        }   
    })
} catch (error) {
    console.log(error)
}