const router = require('express').Router()
const {
  comma,
  pipe,
  space,
  genderSort,
  cache,
  birthSort,
  lastNameSort
} = require('./cli.js')

router.post('/', async (req, res, next) => {
  try {
    res.json()
  } catch (err) {
    next(err)
  }
})

router.get('/', (req, res, next) => {
  try {
    res.json(cache)
  } catch (err) {
    next(err)
  }
})

router.get('/gender', (req, res, next) => {
  const output = genderSort(cache)
  try {
    res.json(output)
  } catch (err) {
    next(err)
  }
})

router.get('/birthdate', (req, res, next) => {
  const output = birthSort(cache)
  try {
    res.json(output)
  } catch (err) {
    next(err)
  }
})

router.get('/name', (req, res, next) => {
  const output = cache.sort(lastNameSort)
  try {
    res.json(output)
  } catch (err) {
    next(err)
  }
})

module.exports = router
