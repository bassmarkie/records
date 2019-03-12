const { expect } = require('chai')
const {
  comma,
  pipe,
  space,
  genderSort,
  cache,
  birthSort,
  lastNameSort
} = require('./cli.js')

describe('FS Read File', () => {
  it('accepts comma-delimited', () => {
    expect(comma.join(' ')).to.equal('Cooper Ava Female Red 05/05/1965')
  })
  it('accepts pipe-delimited', () => {
    expect(pipe.join(' ')).to.equal('Brown John Male Green 01/10/1980')
  })
  it('accepts space-delimited', () => {
    expect(space.join(' ')).to.equal('Tosco Linda Female Purple 10/03/1980')
  })
})
describe('Option 1', () => {
  it('sort by gender, then last name ascending', () =>
    expect(genderSort(cache)).to.eql([
      ['Cooper', 'Ava', 'Female', 'Red', '05/05/1965'],
      ['Tosco', 'Linda', 'Female', 'Purple', '10/03/1980'],
      ['Brown', 'John', 'Male', 'Green', '01/10/1980']
    ]))
})

describe('Option 2', () => {
  it('sort by birthdate, ascending', () =>
    expect(birthSort(cache)).to.eql([
      ['Cooper', 'Ava', 'Female', 'Red', '05/05/1965'],
      ['Brown', 'John', 'Male', 'Green', '01/10/1980'],
      ['Tosco', 'Linda', 'Female', 'Purple', '10/03/1980']
    ]))
})

describe('Option 3', () => {
  it('sort by last name, descending', () =>
    expect(cache.sort(lastNameSort).reverse()).to.eql([
      ['Tosco', 'Linda', 'Female', 'Purple', '10/03/1980'],
      ['Cooper', 'Ava', 'Female', 'Red', '05/05/1965'],
      ['Brown', 'John', 'Male', 'Green', '01/10/1980']
    ]))
})
