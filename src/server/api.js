// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

app.get('/students', (req, res) => {
    // preparing array of student
    var students = [
        {
            name: 'James Smith',
            age: 17,
            id: 1
        },
        {
            name: 'Elizabeth Johnson',
            age: 23,
            id: 2
        },
        {
            name: 'David Wilson',
            age: 34,
            id: 3
        }
    ];
    //next line will send response in JSON format
    res.json(students);
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/`
    )
);
