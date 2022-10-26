const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;

app.use(cors());

const topics = require ('./Data/courses.json');
const details = require('./Data/details.json')

// app.get('/', (req, res) => {
//     res.send('marketing Api running');
// });

app.get('/course-topics' , (req , res ) => {
    res.send(topics)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course_details = details.filter( detail => detail.course_id === id);
    res.send(course_details);
})

app.get('/topics', (req, res) => {
    res.send(topics);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const clickedDetails = details.find( detail =>detail.id === id);
    res.send(clickedDetails);
})

app.listen(port, () => {
    console.log('marketing topics will be shown', port);
})