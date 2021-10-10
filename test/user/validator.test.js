import makeUser from '../../src/modules/user/validator';

describe('makeUser', () => {
  test('throws error if invalid payload', (done) => {
    let errorMessage = '"description" must be a string by validator.';
    let data = {
      name: 'John',
      dob: '01/01/1995',
      address: 'New York',
      description: 2,
    };
    expect(() => makeUser(data)).toThrow(errorMessage);
    done();
  });
  test('must have name, dob, address & address ', (done) => {
    let data = {
      name: 'John',
      dob: '01/01/1995',
      address: 'New York',
      description: 'description',
    };
    let user = makeUser(data);
    let input = {
      name: user.getName(),
      dob: user.getDob(),
      address: user.getAddress(),
      description: user.getDescription(),
    };
    let actual = data;
    expect(input).toEqual(expect.objectContaining(actual));
    done();
  });
});
