const app = require("../app.js");
const request = require("supertest");
describe('Test for valide end point ', () => {
  it('should return valid', async () => {
    const { body, status } = await request(app).post("/api/v1/validate").send({
	"data":{ "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot" },
	"rules":["type","crux","color","title"]
    });
    expect(body).toMatchObject({ data: "valid" });
    expect(status).toBe(200);
    
  });
  it('should return list of rules not found in request body object', async() => {
    const { body, status } = await request(app).post("/api/v1/validate").send({
      "data": { "type": "durban", "crux": "Indices", "color": "green" },
      "rules": ["type", "crux", "color", "title"]
    });
  
    expect(body).toMatchObject({error:["title"]});
  });
 ;
  
  
})
