#!/usr/bin/env node
const fs = require('fs')

const dir = './app/position.txt'
const position = fs.readFileSync(dir).toString()

if (position.includes(','))
    console.log(position)