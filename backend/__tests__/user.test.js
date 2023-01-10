const request = require('supertest');
const app = require('../main');

describe('POST /user', () => {
    test('It should return true', async () => {
        const user = {
            username: 'gmorikawa',
            password: 'gmorikawa'
        };
        const response = await request(app).post('/user').send(user);

        expect(response.body).toEqual({ success: true });
        expect(response.statusCode).toBe(200);
    });
});