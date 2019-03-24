const request = require('supertest');

const server = require('./server.js');

describe('the routes', () => {
    describe('get/games', () => {
        it('it exists', () => {
            request(server).get('/games')
                .then(response => {
                    expect(response).toBeTruthy();
                })
                .catch(err => {
                    console.log(err);
                    console.log('no good');
                })
        });
        it('responds with 200 status code', () => {
            request(server).get('/games')
                .then(response => {
                    expect(response.status).toBe(200);
                })
                .catch(err => {
                    console.log(err);
                    console.log(' test failed');
                })
        });
        it('returns json', () => {
            request(server).get('/games')
                .then(response => {
                    expect(response.type).toMatch(/json/i);
                })
                .catch(err => {
                    console.log(err);
                    console.log('game over');
                })
        });
    })
    describe('post request', () => {
        const body = {
            title: 'tetris',
            genre: 'arcade',
            releaseYear: 1984,
        };
        it('it exists', () => {
            request(server).post('/games/add-game').send(body)
                .then(response => {
                    expect(response).toBeTruthy();
                })
                .catch(err => {
                    console.log(err);
                    console.log('post request failed.');
                })
        });
        it('responds with 201 status code', () => {
            request(server).post('/games/add-game').send(body)
                .then(response => {
                    expect(response.status).toBe(201);
                })
                .catch(err => {
                    console.log(err);
                    console.log('post request failed.');
                })
        });
        it('responds with error code with wrong body request', () => {
            const wrongBody = { };
            request(server).post('/games/add-game').send(wrongBody)
                .then(response => {
                    expect(response.status).not.toBe(201);
                })
                .catch(err => {
                    console.log(err);
                    console.log('post request failed.');
                })
        });
    })
})