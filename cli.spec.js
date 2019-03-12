const { expect } = require('chai')
const records = require('./cli.js')

describe('FS Read File', () => {
  it('accepts comma-delimited', () => {
    expect(records.comma.join(' ')).to.equal('Bosco Ava Female Red 05/05/1965')
  })
  it('accepts pipe-delimited', () => {
    expect(records.pipe.join(' ')).to.equal('Brown John Male Green 01/10/1980')
  })
  it('accepts space-delimited', () => {
    expect(records.space.join(' ')).to.equal(
      'Cooper Linda Female Purple 10/03/1975'
    )
  })
})
