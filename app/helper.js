const fs = require('fs')

const dir = './app/position.txt'
const position = fs.readFileSync(dir).toString()
const {DirectionArr} = require('../app/constants.js')

const getPosition = () =>{
    let p = position.split(',')
    if (p.length == 3){
        p[0] = parseInt(p[0])
        p[1] = parseInt(p[1])
        p[2] = DirectionArr.findIndex( e=> e == p[2])
        return p
    }
    else
        return null
}

const savePosition = (p) =>{
    fs.writeFileSync(dir, p.join(','))
}
  
module.exports = {
    getPosition,
    savePosition
};
  