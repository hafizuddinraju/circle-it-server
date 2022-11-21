const express = require('express')
const app = express()
const cors = require('cors')
const category = require('./data/category.json')
const courses = require('./data/courses.json')
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/category', (req, res) => {
  res.send(category)
})
app.get('/allcourses', (req, res) => {
  res.send(courses)
})
app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
    const allCourse = courses.filter(n => n.category_id === id);
    res.send(allCourse)
})
app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const selectCourses = courses.find(n => n._id === id);
  res.send(selectCourses)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})