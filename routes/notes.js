const router = require('express').Router()
// const notes = require('../public/notes.html')
// const path = require('path');

const {
    readFromFile,
    readAndAppend,
    // writeToFile,
  } = require('../helpers/fsUtils')

router.get ('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/', (req, res) => {

  let id = Math.floor(Math.random() * 1000000)
  let newNote = req.body;
  newNote.id = id

  if (newNote) {
    readAndAppend(newNote, './db/db.json')
    readFromFile('./db/db.json').then(data => res.json(JSON.parse(data))
    )} else {
    res.json('you got an error')
  }

})

module.exports = router