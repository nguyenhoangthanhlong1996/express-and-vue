const cors = require('cors');
const express = require('express')
const app = express()
app.use(cors());
app.options('*', cors());
const port = 3000

const exampleData = [
    {id: 1, title: 'Title 1', content: 'Content 1'},
    {id: 2, title: 'Title 2', content: 'Content 2'},
    {id: 3, title: 'Title 3', content: 'Content 3'},
    {id: 4, title: 'Title 4', content: 'Content 4'},
    {id: 5, title: 'Title 5', content: 'Content 5'},
]

// Get all notes
app.get('/notes', (req, res) => {
  res.json(exampleData)
})

// Get one note by id
app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    const index = exampleData.findIndex(n => n.id == id)
    res.json(exampleData[index])
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})