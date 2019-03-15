const request = require("supertest");
const server = require("./api/server");

describe("server.js", () => {
  describe("POST/games endpoint", () => {
    it("should return text", async () => {
      const response = await request(server)
        .post("/games")
        .send({
          title: "God of War",
          genre: "action/adventure",
          releaseYear: 2018
        });

      expect(response.type).toBe("text/html");
    });

    it('should have a title',async () => {
        const response = await request(server)
        .post('/games').send({genre: 'action'})

        expect(response.body).toBe({error: 'title and genre required'});
    });

    it("should have a genre", async () => {
      const response = await request(games)
        .post("/games")
        .send({title: "God of war"});

      expect(response.body).toBe({error: 'title and genre required'});
    });

    it('should add a game' , async () => {
      const response = await request(server)
        .post('/games')
        .send({title: 'Tom Clancys The Division 2', genre: 'Action/RPG', releaseYear: 2019})

      expect(response.body).toBe({games})
    });

  });



  describe('GET /games route', () => {
    it('should return a status code of 200', async () => {
      const response = await request(server).get('/api/games')

      expect(response.status).toBe(404)
    })

    it('should return html', async () => {
      const response = await request(server).get('/games')

      expect(response.type).toBe('text/html')
    })

    it('should return an array of objects', async () => {
      const response = await request(server).get('/games')

      expect(typeof response.body).toBe('object')
    })
  })

});
