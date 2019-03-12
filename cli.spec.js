const { expect } = require('chai')
const { comma, pipe, space, genderSort, cache } = require('./cli.js')

describe('FS Read File', () => {
  it('accepts comma-delimited', () => {
    expect(comma.join(' ')).to.equal('Cooper Ava Female Red 05/05/1965')
  })
  it('accepts pipe-delimited', () => {
    expect(pipe.join(' ')).to.equal('Brown John Male Green 01/10/1980')
  })
  it('accepts space-delimited', () => {
    expect(space.join(' ')).to.equal('Bosco Linda Female Purple 10/03/1975')
  })
})
describe('Option 1', () => {
  it('sort by gender, then last name ascending', () =>
    expect(genderSort(cache)).to.eql([
      ['Bosco', 'Linda', 'Female', 'Purple', '10/03/1975'],
      ['Cooper', 'Ava', 'Female', 'Red', '05/05/1965'],
      ['Brown', 'John', 'Male', 'Green', '01/10/1980']
    ]))
})
