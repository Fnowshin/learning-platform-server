const express = require('express')
const app = express();
const port = process.env.PORT || 7000;

const topics = require ('./Data/topics.json');

app.get('/', (req, res) => {
    res.send('marketing Api running');
});

app.get('/course-topics' , (req , res ) => {
    res.send(topics)
})

app.listen(port, () => {
    console.log('marketing topics will be shown', port);
})