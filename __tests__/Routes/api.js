// File for testing all /api routes

const request = require("supertest");
const app = require("../../app");

describe("/api/ping", () => {
  it("Should return 200 status code", async () => {
    const res = await request(app)
      .get("/api/ping");

    expect(res.statusCode).toEqual(200);
  });

})
describe("/api/posts", () => {
  it("Should return 200 status code", async () => {
    const res = await request(app)
      .get("/api/posts")
      .query({tags : "tech"});

    expect(res.statusCode).toEqual(200)
  });

  it("Should return 200 when sorting by likes", async () => {
    const res = await request(app)
    .get("/api/posts")
    .query({tags : "tech", sortBy : "likes"});

    expect(res.statusCode).toEqual(200);
  })

  it("Should return 200 when changin direction", async () => {
    const res = await request(app)
    .get("/api/posts")
    .query({tags : "tech", direction : "desc"});

    expect(res.statusCode).toEqual(200);
  })

  it("Should return 400 with an error message about tags", async () => {
    const res = await request(app)
      .get("/api/posts")
      .query();

    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain("Tags parameter is required");
  })

  it("Should return 400 with an error message about invalid sortby", async () => {
    const res = await request(app)
    .get("/api/posts")
    .query({tags : "tech", sortBy : "notValid"});

    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain("sortBy parameter is invalid");
  })

  it("Should return 400 with an error message about invalid direction", async () => {
    const res = await request(app)
    .get("/api/posts")
    .query({tags : "tech", direction : "notValid"});

    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain("direction parameter is invalid");
  })

})