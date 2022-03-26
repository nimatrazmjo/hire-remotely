import request from "supertest";
import { app } from "../../app";
import { QuestionMocks } from "../../mocks/question.mock";
import Question from "../../models/question";

import { mongoId } from "../../helpers/generate-mongo-id";
const QUESTION_API = "/api/questions";

describe("POST /api/questions", () => {
  it("Should not return 404 if the route exists", async () => {
    const response = await request(app).post(QUESTION_API).send({});
    expect(response.statusCode).not.toBe(404);
  });
  it("Should not return 422 if any field is missing", async () => {
    const response = await request(app).post(QUESTION_API).send({});
    expect(response.statusCode).toBe(422);
  });
  it("Should not return 201 if any question successfully inserted", async () => {
    await request(app).post(QUESTION_API).send(QuestionMocks).expect(201);

    const question = await Question.findOne({});
    expect(question.question).toEqual(QuestionMocks[0].question);
  });
});
describe("GET /api/questions/:id", () => {
  it("Should return 404 if the question does not exists in database", async () => {
    const response = await request(app).get(`${QUESTION_API}/${mongoId()}`);
    expect(response.statusCode).toBe(404);
  });

  it("Should return 200 if the question found", async () => {
    const { body } = await request(app)
      .post(QUESTION_API)
      .send(QuestionMocks)
      .expect(201);
    let id = body._id;
    const response = await request(app).get(`${QUESTION_API}/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.question).toEqual(QuestionMocks[0].question);
  });
});

describe("PUT /api/questions/:id", () => {
  it("Should 201 if the user provide valid data", async () => {
    const { body } = await request(app)
      .post(QUESTION_API)
      .send(QuestionMocks)
      .expect(201);
    const id = body._id;
    const updatedData = { ...QuestionMocks, question: "updated question" };
    await request(app)
      .put(`${QUESTION_API}/${id}`)
      .send({ updatedData })
      .expect(201);

    const updatedResult = await request(app)
      .put(`${QUESTION_API}/${id}`)
      .send(updatedData);
    expect(updatedResult.body.question).toEqual("updated question");
  });
});
