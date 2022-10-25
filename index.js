const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;

app.use(cors());

const topics = require ('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('marketing Api running');
});

app.get('/course-topics' , (req , res ) => {
    res.send(topics)
})

app.listen(port, () => {
    console.log('marketing topics will be shown', port);
})