#!/usr/bin/env node

const {DirectionArr} = require('../app/constants.js')
const args = process.argv.slice(2)
const { savePosition } = require('../app/helper')

try {
    if (args.length == 0){
        throw 'X,Y,F is required'
    }

    let p = args[0].trim().split(',')
    if (p.length !== 3){
        throw  'Invalid Place input. Should be X,Y,F'
    }

    p[0] = parseFloat(p[0])
    p[1] = parseFloat(p[1])
    p[2] = p[2].trim().toUpperCase()
    if (!(p[0] >= 0 && p[0] <= 4)){
        throw 'X should be 0 to 4 integer'
    }
    else if (!(p[1] >= 0 && p[1] <= 4)){
        throw 'Y should be 0 to 4 integer'
    }
    else if (!(DirectionArr.includes(p[2]))){
        throw `${p[2]} should be a valid direction. Choose from (${DirectionArr.join(',')})`
    }

    savePosition(p)
} catch (error) {
    console.log(error)
}