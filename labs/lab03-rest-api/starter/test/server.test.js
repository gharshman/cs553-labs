import { describe, expect, test } from "vitest";
import request from "supertest";
import { createApp } from "../src/server.js";

describe("Lab 3 GET /health", () => {
  test("GET /health returns status ok", async () => {
    const app = createApp();
    const response = await request(app).get("/health").expect(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});

describe("Lab 3 GET /missing", () => {
  test("GET /missing returns status 404", async () => {
    const app = createApp();
    const response = await request(app).get("/missing").expect(404);
    expect(response.body).toHaveProperty("error");
  });
});

describe("Lab 3 GET /items", () => {
  test("GET /items returns status 200 & JSON", async () => {
    const app = createApp();
    const response = await request(app).get("/items").expect(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });
});

describe("Lab 3 GET /items/{id}", () => {
  test('GET /items/{id} returns status 200 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .get('/items/1')
        .expect('Content-Type', /json/)
        .expect(200);
  });
});

describe("Lab 3 GET invalid item", () => {
  test('GET /items/{id} returns status 200 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .get('/items/42')
        .expect(404);
  });
});


describe("Lab 3 POST /items", () => {
  test('POST /items returns status 201 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .post('/items')
        .send({name: 'monitor', quantity: 12})
        .expect('Content-Type', /json/)
        .expect(201);
    expect(response.body.message).toBe('Item created successfully');
  });
});

describe("Lab 3 POST /items", () => {
  test('POST /items returns status 201 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .post('/items')
        .send({name: 'speakers', quantity: 12})
        .expect('Content-Type', /json/)
        .expect(201);
    expect(response.body.message).toBe('Item created successfully');
  });
});

describe("Lab 3 POST /items", () => {
  test('POST /items returns status 201 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .post('/items')
        .send({name: 'camera', quantity: 12})
        .expect('Content-Type', /json/)
        .expect(201);
    expect(response.body.message).toBe('Item created successfully');
  });
});

describe("Lab 3 POST /items", () => {
  test('POST /items returns status 201 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .post('/items')
        .send({name: 'printer', quantity: 12})
        .expect('Content-Type', /json/)
        .expect(201);
    expect(response.body.message).toBe('Item created successfully');
  });
});

describe("Lab 3 POST invalid quantity", () => {
  test('POST /items returns status 201 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .post('/items')
        .send({name: 'printer', quantity: -2})
        .expect('Content-Type', /json/)
        .expect(400);
    expect(response.body).toHaveProperty("error");
  });
});

describe("Lab 3 PUT /items/{id}", () => {
  test('PUT /items/{id} returns status 200 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .put('/items/1')
        .send({name: 'mechanical keyboard', quantity: 42})
        .expect('Content-Type', /json/)
        .expect(200);
  });
});

describe("Lab 3 PUT invalid item", () => {
  test('PUT /items/{id} returns status 404 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .put('/items/42')
        .send({name: 'scanner', quantity: 4})
        .expect(404);
    expect(response.body).toHaveProperty("error");
  });
});

describe("Lab 3 PUT invalid data", () => {
  test('PUT /items/{id} returns status 404 & JSON', async () => {
    const app = createApp();
    const response = await request(app)
        .put('/items/1')
        .send({name: 'scanner', quantity: -1})
        .expect(400);
    expect(response.body).toHaveProperty("error");
  });
});

describe("Lab 3 PUT invalid data", () => {
  test('PUT /items/{id} returns status 404 & error', async () => {
    const app = createApp();
    const response = await request(app)
        .put('/items/1')
        .send({name: 'scanner', quantity: 'four'})
        .expect(400);
    expect(response.body).toHaveProperty("error");
  });
});

describe("Lab 3 PUT invalid JSON", () => {
  test('PUT /items/{id} returns status 400 & error', async () => {
    const app = createApp();
    const response = await request(app)
        .put('/items/1')
        .send({name: 'scanner'})
        .expect(400);
    expect(response.body).toHaveProperty("error");
  });
});

describe("Lab 3 DELETE /items/{id}", () => {
  test('DELETE /items/{id} returns status 201 & message', async () => {
    const app = createApp();
    const response = await request(app)
        .delete('/items/1')
        .expect(201);
  });
});

describe("Lab 3 DELETE invalid item", () => {
  test('DELETE /items/{id} returns status 404 & error', async () => {
    const app = createApp();
    const response = await request(app)
        .delete('/items/42')
        .expect(404);
    expect(response.body).toHaveProperty("error");
  });
});
