const app = require("../app");
const request = require("supertest");
describe('test for removing item from an request body', () => {
  it('should return return object without item removed', async() => {
    const { body, status } = await request(app).delete("/api/v1/remove/type")
      .send({ "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot" } });
    expect(status).toBe(200);
    expect(body.data).not.toHaveProperty("type");
  });
  it('should return attribute not found', async() => {
    const { body, status } = await request(app).delete("/api/v1/remove/name")
      .send({ "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot" } });
    expect(body).toMatchObject({error:'attribute not found'});
  });
  
  
})
