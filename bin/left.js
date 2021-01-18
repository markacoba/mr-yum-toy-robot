#!/usr/bin/env node

const { DirectionArr } = require('../app/constants')
const { getPosition, savePosition } = require('../app/helper')

const p = getPosition()
if (p !== null){
    if (p[2] > 0)
        p[2]--
    else
        p[2] = 3

    p[2] = DirectionArr[p[2]]
    savePosition(p)
}