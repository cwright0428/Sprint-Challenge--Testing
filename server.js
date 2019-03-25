const express = require('express');

const db = require('./helpers');


const server = express();


server.use(express.json());

server.get('/games', (req, res) => {
    db.grab()
    .then(response => {

        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        console.log('get request failure');
        res.status(500).json({message: 'try again dude'});
    })
});
server.post('/games/add', (req, res) => {
    const game = req.body
    if(game.title && game.genre && game.releaseYear) {
        db('games').insert(game)
        .then(id => {
          res.send(id).status(201)
        })
        } else {
          res.status(422).send('Must have title,genre, and release year')
        }

    // db.add(req.body)
    //     .then(response => {
    //         console.log(response);
    //         console.log('success');
    //         res.status(201).json({msg: `${req.body} New game added!`})
    //     })
    //     .catch(err => {

    //         res.status(500).json({error: 'You broke it dude'});
    //     })
});

module.exports = server;





















