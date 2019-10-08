const app = require("../app.js");
const request = require("supertest");


describe('Test for aladin end point', () => {
  it('should return 0 as the shortest index', async() => {
    const {body,status } =  await request(app).post("/api/v1/aladin").send({
	  "n":4,
"magic" :[3, 2, 5, 4],
"dist" :[2, 3, 4, 2]

    });
    expect(status).toBe(200);
    expect(body).toMatchObject({
    "lowestIndex": 0
});
  });
   it('should return -1 as the shortest index', async() => {
    const {body,status } =  await request(app).post("/api/v1/aladin").send({
	  "n":4,
"magic" :[1, 2, 1, 1],
"dist" :[2, 3, 4, 2]

    });
    expect(status).toBe(200);
    expect(body).toMatchObject({
    "lowestIndex": -1
});
   });
  it('should return 3 as the shortest index', async() => {
    const {body,status } =  await request(app).post("/api/v1/aladin").send({
	  "n":4,
"magic" :[1, 2, 1, 10],
"dist" :[2, 3, 4, 2]

    });
    expect(status).toBe(200);
    expect(body).toMatchObject({
    "lowestIndex": 3
});
  });
})
