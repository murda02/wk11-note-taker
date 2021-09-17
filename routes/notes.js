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

  let newNote = req.body;
  console.log('newNote: ', newNote);

  if (newNote) {
    readAndAppend(newNote, './db/db.json')
    res.json(`Note added 🗒️`)
  } else {
    res.json('you got an error')
  }

})

module.exports = router