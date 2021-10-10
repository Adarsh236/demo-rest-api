import CustomResponse from '../../src/helpers/custom-response';

describe('API-responses', () => {
  test('CustomResponse success', (done) => {
    const msg = 'It works.';
    const { success, status, data } = CustomResponse.success({ msg });
    expect(success).toBeTruthy();
    expect(status).toBe(200);
    expect(data).toHaveProperty('msg');
    expect(data.msg).toEqual(msg);
    done();
  });

  test('CustomResponse error', (done) => {
    const msg = "It doesn't work.";
    const { success, status, data } = CustomResponse.error({ msg }, 404);
    expect(success).toBeFalsy();
    expect(status).toBe(404);
    expect(data).toHaveProperty('msg');
    expect(data.msg).toEqual(msg);
    done();
  });
});
