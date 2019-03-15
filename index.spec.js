const request = require("supertest");
const server = require("./api/server");

describe("server.js", () => {
  describe("post/games endpoint", () => {
    it("should return JSON", async () => {
      const res = await request(server)
        .post("/games")
        .send({
          title: "God of War",
          genre: "action/adventure",
          releaseYear: 2018
        });

      expect(response.type).toBe("application.json");
    });

    it('should have a title',async () => {
        const response = await request(server)
        .post('/games').send({genre: 'action'})

        expect(response.body).toBe({error: 'title and genre required'});
    });

    it("should have a genre", async () => {
      const response = await request(server)
        .post("/games")
        .send({title: "God of war"});

      expect(response.body).toBe({error: 'title and genre required'});
    });

    it('should add a game' , async () => {
      const response = await request(server)
        .post('/games')
        .send({title: 'Tom Clancys The Division 2', genre: 'Action/RPG', releaseYear: 2019})

      expect(response.body).toBe(1)
    });

  });



  describe('GET /games route', () => {
    it('should return a status code of 200', async () => {
      const response = await request(server).get('/games')

      expect(response.status).toBe(200)
    })

    it('should return JSON', async () => {
      const response = await request(server).get('/games')

      expect(response.type).toBe('application/json')
    })

    it('should return an array of objects', async () => {
      const response = await request(server).get('/games')

      expect(typeof response.body).toBe('array')
    })
  })

});
