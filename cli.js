#!/usr/bin/env node
'use strict'
const [, , ...args] = process.argv

const fs = require('fs')
const comma = fs
  .readFileSync('texts/comma.txt')
  .toString()
  .trim()
  .split(', ')
const pipe = fs
  .readFileSync('texts/pipe.txt')
  .toString()
  .trim()
  .split(' | ')
const space = fs
  .readFileSync('texts/space.txt')
  .toString()
  .trim()
  .split(' ')

process.stdout.write(
  'Sort By Gender - 1 \nSort By Birth Date - 2 \nSort By Surname - 3 \n> '
)
process.stdin.on('data', data => {
  const cmd = data.toString().trim()
  if (cmd > 0 && cmd < 4) {
    process.stdout.write(`${comma} \n${space} \n${pipe}`)
  } else process.stdout.write('invalid selection')
  process.stdout.write(
    '\n\n\n\nSort By Gender - 1 \nSort By Birth Date - 2 \nSort By Surname - 3 \n> '
  )
})

module.exports = { comma, pipe, space }
