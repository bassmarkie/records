const { expect } = require('chai')
const request = require('supertest')
const app = require('./index')

describe('/records API routes', () => {
  let data = 'Walker John Male Orange 07/07/1965'
  it('POST creates a new entry', done => {
    request(app)
      .post('/records')
      .send(data)
      .set('Accept', 'application/json')
      .expect(201)
      .end(err => {
        if (err) return done(err)
        done()
      })
  })

  it('POST creates multiple entries', done => {
    let one = 'Palmer, Arnold, Male, Yellow, 02/07/1960'
    let two = 'Cambridge | Erica | Female | Pink | 04/01/1960'
    let data2 = [[one], [two]]
    request(app)
      .post('/records')
      .send(data2)
      .set('Accept', 'application/json')
      .expect(201)
      .end(err => {
        if (err) return done(err)
        done()
      })
  })

  it('GET records sorted by Gender', done => {
    request(app)
      .get('/records/gender')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body[0][0]).to.eql('Cambridge')
      })
      .end(err => {
        if (err) return done(err)
        done()
      })
  })
  it('GET records sorted by Birthdate', done => {
    request(app)
      .get('/records/birthdate')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body[0][0]).to.eql('Palmer')
      })
      .end(err => {
        if (err) return done(err)
        done()
      })
  })
  it('GET records sorted by name, ascending', done => {
    request(app)
      .get('/records/name')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body[0][0]).to.eql('Brown')
      })
      .end(err => {
        if (err) return done(err)
        done()
      })
  })
})
