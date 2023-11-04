const { server } = require("../src/server");
const request = require("supertest");

describe("Testing Endpoints of API", () => {

  it("Should return a initial route from API", async () => {
    const response = await request(server).get("/");
    expect(response).toBeTruthy();
  });
});
