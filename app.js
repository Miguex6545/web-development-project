/*
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/fan_test.html');
});

app.post('/submit-test', (req, res) => {
 
    res.send('Thank you for submission');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
*/
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/fan_test.html');
});

app.post('/submit-test', (req, res) => {
    console.log('Submitted Answers:', req.body);


    res.send('Thank you Culer!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
