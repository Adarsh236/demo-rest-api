import request from 'supertest';
import app from '../../src/core/express';

describe('Test the root path -> return 404', () => {
  test('It should response the GET method with 404 message', async () => {
    const response = await request(app).get('/');
    const { success, status, data } = response.body;
    expect(response.statusCode).toBe(404);
    expect(success).toBeFalsy();
    expect(status).toBe(404);
    expect(data).toHaveProperty('message');
    expect(data.message).toContain('404');
  });
});
