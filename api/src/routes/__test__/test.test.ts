import { app } from '../../app';
import request from 'supertest';
import { TestMock } from '../../mocks/test.mock';
import { QuestionMocks } from '../../mocks/question.mock';
import { randomBytes } from 'crypto';
const TEST_API = '/api/tests';
const QUESTION_API = "/api/questions";
describe('POST /api/tests', () => {
    it('It should not return 404 if route is defined', async () => {
        await request(app).post(QUESTION_API).send(QuestionMocks).expect(201);
        const res = await request(app).post(TEST_API).send({ language: 'php' })
        expect(res.statusCode).not.toBe(404);
    });

    it('It should not return 422 if language is not sent', async () => {
        await request(app).post(QUESTION_API).send(QuestionMocks).expect(201);
        const res = await request(app).post(TEST_API).send({})
        expect(res.statusCode).toBe(422);
    });

    it('It should not return 400 if questions does not exists for that language', async () => {
        await request(app).post(QUESTION_API).send(QuestionMocks).expect(201);
        const res = await request(app).post(TEST_API).send({ language: 'cpp' })
        expect(res.statusCode).toBe(400);
    });

    it('It should not return 201 if questions does not exists for that language', async () => {
        await request(app).post(QUESTION_API).send(QuestionMocks).expect(201);
        const res = await request(app).post(TEST_API).send({ language: 'php' })
        expect(res.statusCode).toBe(201);
    });
});

describe(' GET /api/tests/{hash}', () => {
    const hash = randomBytes(30).toString('hex');
    it(' Should return 400 if the test does not found', async () => {
        const res = await request(app).get(`${TEST_API}/${hash}`);
        expect(res.statusCode).toBe(400);
    });
    it(' Should return 400 if the test has already been taken', async () => { });
    it(' Should return 400 if the test time been been expired', async () => { });
    it(' Should return 200 if the test found', async () => {
        await request(app).post(QUESTION_API).send(QuestionMocks).expect(201);
        const { body: { hash } } = await request(app).post(TEST_API).send({ language: 'php' }).expect(201);


        await request(app).get(`${TEST_API}/${hash}`).expect(200);
    });
});