const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hello World!'))

var courses = [{"title": "Angular_Node", "summary": "framework from google!!"},
{"title": "React", "summary": "library from facebook!!"},
{"title": "Ember", "summary": "ui open source framework!!"},
{"title": "Js", "summary": "backbone programming language"}
]


app.get('/courses', (req,res) => res.json(courses))

app.post('/courses', (req, res)=> {
    var course = req.body
    courses.push(course)
    res.status(201).json({message: "Course successfully inserted!!"})
})

app.delete('/courses/:index', (req,res)=>{
    var index = req.params.index;
    console.log(index)
    courses.splice(index, 1);
    res.status(200).json({message: "Course successfully deleted!!"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))