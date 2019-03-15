const server = require('./api/server.js')

let games = [
    { title: 'God of War', genre: 'action/adventure', releaseYear: 2019 },
    { title: 'Tom Clancys The Division 2', genre: 'Action/RPG', releaseYear: 2019 },
];

server.get('/', async (req, res) => {
    res.status(200).json({ response: 'ready player one '})
})

server.get('/api/games', async (req, res) => {
    res.status(200).json(games);
})

server.post('/api/games', async (req, res) => {
    const game = req.body;

    if (game.title) {
        const ids = await games.insert(game)
        res.status(201).json(ids);
    }
    else {
        res.status(422).json({error: 'title and genre required'})
    }
})

const port = 9000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});