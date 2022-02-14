import { IQuestionDocs } from './../../interfaces/question.interface';
import request from "supertest";
import { app } from "../../app";
import { QuestionMocks } from "../../mocks/question.mock";
import Question from "../../models/question";
const QUESTION_API = '/api/questions'

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
    await request(app)
      .post(QUESTION_API)
      .send(QuestionMocks)
      .expect(201);
    
      const question =await Question.findOne({});
      expect(question.question).toEqual(QuestionMocks.question);
  });
});
