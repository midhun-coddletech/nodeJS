/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userArray = [];

app.post('/signup', (req, res) => {
    const userDetails = req.body;
    const {
        firstname, lastname, username, email, password,
    } = userDetails;
    console.log(req.body);
    const userObj = {
        firstname, lastname, username, email, password,
    };
    userArray.push(userObj);

    return res.send(`<h1>User registered succesfully</h1><h1>Welcome ${username}</h1>`);
});

app.post('/login', (req, res) => {
    const loginDetails = req.body;
    const {
        username, password,
    } = loginDetails;

    let userFound = false;

    userArray.forEach((item) => {
        if (item.username === username && item.password === password) {
            console.log('Correct');
            userFound = true;
        }
    });

    if (userFound) {
        return res.send(`<h1>Login Successful</h1><h1>Welcome ${username}</h1>`);
    } else {
        console.log('Incorrect');
        return res.send('<h1>Incorrect login details</h1>');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
