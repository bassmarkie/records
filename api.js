const router = require('express').Router()
const { genderSort, cache, birthSort, lastNameSort } = require('./cli.js')

let newCache = cache

const sanitize = post => {
  let newPost = []
  if (!Array.isArray(post)) {
    post = Object.keys(post)
  }
  for (let i = 0; i < post.length; i++) {
    if (post[i].toString().includes(',')) {
      newPost.push(
        post[i]
          .toString()
          .trim()
          .split(', ')
      )
    } else if (post[i].toString().includes('|')) {
      newPost.push(
        post[i]
          .toString()
          .trim()
          .split(' | ')
      )
    } else {
      newPost.push(
        post[i]
          .toString()
          .trim()
          .split(' ')
      )
    }
  }
  newPost.forEach(x => {
    newCache.push(x)
  })
  return newPost
}

router.post('/', (req, res, next) => {
  let data = req.body
  let post = sanitize(data)
  try {
    res.status(201).json(post)
  } catch (err) {
    next(err)
  }
})

// could have used req.params to combine into one route.
router.get('/gender', (req, res, next) => {
  const output = genderSort(newCache)
  try {
    res.json(output)
  } catch (err) {
    next(err)
  }
})

router.get('/birthdate', (req, res, next) => {
  const output = birthSort(newCache)
  try {
    res.json(output)
  } catch (err) {
    next(err)
  }
})

router.get('/name', (req, res, next) => {
  const output = newCache.sort(lastNameSort)
  try {
    res.json(output)
  } catch (err) {
    next(err)
  }
})

module.exports = router
