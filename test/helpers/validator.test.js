import validator from '../../src/helpers/validator';
import userSchema from '../../src/modules/user/validator/user.schema';

let userValidator = validator(userSchema);

describe('validators', () => {
  test('userValidator: name:string:required, dob:string:required, address:string:required, description:string:required.', (done) => {
    let validPayload = {
      name: 'John',
      dob: '01/01/1995',
      address: 'New York',
      description: 'new user',
    };
    let input = userValidator(validPayload);
    let actual = true;
    expect(input).toEqual(actual);
    done();
  });

  test('userValidator: returns error messages if invalid', (done) => {
    let invalidPayload = {
      name: 'John',
      dob: '01/01/1995',
      address: 'New York',
      description: 2,
    };
    let input = userValidator(invalidPayload);
    let actual = {
      error: '"description" must be a string by validator.',
    };

    expect(input).toEqual(actual);
    done();
  });
});
