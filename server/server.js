const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found.',
        name: 'Todo App'
    });
});

app.get('/users', (req, res) => {
    res.status(200)
        .send([
            {
                name: 'Some',
                age: 25
            },
            {
                name: 'Kitten',
                age: 23
            }
        ]);
});

app.listen(3000, () => {
    console.log('App started!');
});

module.exports.app = app;
