const express = require('express');
const app = express();


const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', (req, res) => {
    res.json({
        succes: true,
        message: 'succesfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        succes: true,
        message: 'got one user',
        user: req.params.id
    })
})


app.listen(8000, () => {
    console.log("server is running")
})