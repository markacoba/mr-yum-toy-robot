#!/usr/bin/env node

const { DirectionArr } = require('../app/constants')
const { getPosition, savePosition } = require('../app/helper')

const p = getPosition()
if (p !== null){
    let x = p[0]
    let y = p[1]
    switch(p[2]){ // direction (0=S, 1=W, 2=N, 3=E)
        case 0:
            if (y > 0)
                y--
            break
        case 1:
            if (x > 0)
                x--
            break
        case 2:
            if (y < 4)
                y++
            break
        case 3:
            if (x < 4)
                x++
            break
    }
    p[0] = x
    p[1] = y
    p[2] = DirectionArr[p[2]]
    savePosition(p)
}