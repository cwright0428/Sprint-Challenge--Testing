const server = require('./api/server.js')

server.get('/', async (req, res) => {
    res.status(200).json({ response: 'ready player one '})
})

server.get('/api/games', async (req, res) => {
    const list = await data(games);
    res.status(200).json(list);
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