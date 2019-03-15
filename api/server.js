const express = require('express');
const server = express();

let games = [
    { title: 'God of War', genre: 'action/adventure', releaseYear: 2019 },
    { title: 'Tom Clancys The Division 2', genre: 'Action/RPG', releaseYear: 2019 },
];

server.use(express.json());

// server.get('/', async (req, res) => {
//     res.status(200).json({ response: 'ready player one '})
// })

// server.get('/api/games', async (req, res) => {
//     res.status(200).json(games);
// })

// server.post('/api/games', async (req, res) => {
//     const game = req.body;

//     if (game.title) {
//         const ids = await games.insert(game)
//         res.status(201).json(ids);
//     }
//     else {
//         res.status(422).json({error: 'title and genre required'})
//     }
// })


const port = process.env.PORT || 9000;

module.exports = server;