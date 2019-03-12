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

const cache = [comma, pipe, space]
const errors = []

const lastNameSort = (a, b) => {
  if (a[0] < b[0]) return -1
  if (a[0] > b[0]) return 1
  return 0
}

const genderSort = array => {
  let females = []
  let males = []
  array.forEach(record => {
    if (record[2].toLowerCase() === 'female') females.push(record)
    else if (record[2].toLowerCase() === 'male') males.push(record)
  })
  females = females.sort(lastNameSort)
  males = males.sort(lastNameSort)
  return [...females, ...males]
}

process.stdout.write(
  'Sort By Gender - 1 \nSort By Birth Date - 2 \nSort By Surname - 3 \n> '
)
process.stdin.on('data', data => {
  const cmd = data.toString().trim()
  let output = []
  if (cmd === '1') {
    output = genderSort(cache)
  } else if (cmd > 1 && cmd < 4) {
    process.stdout.write(`${comma} \n${space} \n${pipe}`)
  } else process.stdout.write('invalid selection')
  console.log(output)
  // process.stdout.write(output)
  process.stdout.write(
    '\n\n\n\nSort By Gender - 1 \nSort By Birth Date - 2 \nSort By Surname - 3 \n> '
  )
})

module.exports = { comma, pipe, space, genderSort, cache }
