import UserRepository from '../../src/modules/user/user.repository';
import DB from '../../src/configs/db.config';

describe('user repository', () => {
  beforeEach(async () => {
    await UserRepository.dropAll();
    const howie = {
      name: 'howie',
      dob: '01/02/1995',
      address: 'new york',
      description: 'test',
    };
    const bill = {
      name: 'bill',
      dob: '01/02/1996',
      address: 'new york',
      description: 'test',
    };
    await UserRepository.createUser(howie);
    await UserRepository.createUser(bill);
  });

  test('lists users', async () => {
    const input = await UserRepository.getUsers();
    const actual = 2;
    expect(input.length).toEqual(actual);
  });

  test('find single user by id', async () => {
    const users = await UserRepository.getUsers();
    const id = users[0].id;

    const user = await UserRepository.getUser('id', id);
    const input = user[0].id;
    const actual = id;
    expect(input).toEqual(actual);
  });

  test('inserts a user', async () => {
    const bill = {
      name: 'bill',
      dob: '01/02/1996',
      address: 'new york',
      description: 'test',
    };
    const newUser = await UserRepository.createUser(bill);
    const { id, createdAt, updatedAt, ...input } = newUser;
    const actual = {
      name: 'bill',
      dob: '01/02/1996',
      address: 'new york',
      description: 'test',
    };
    expect(input).toEqual(expect.objectContaining(actual));
  });

  test('deletes a user', async () => {
    const users = await UserRepository.getUsers();
    const id = users[0].id;
    const validInput = await UserRepository.deleteUser(id);
    const validActual = id;
    expect(validInput).toEqual(validActual);

    const newUsers = await UserRepository.getUsers();
    const inputLength = newUsers.length;
    const actualLength = 1;
    expect(inputLength).toEqual(actualLength);

    const invalidInput = 42;
    const invalidActual = `Error from logger:: Error: User id doesn't exist: ${invalidInput}`;
    try {
      await UserRepository.deleteUser(invalidInput);
    } catch (error) {
      expect(error.message).toEqual(invalidActual);
    }
  });

  test('drops database', async () => {
    await UserRepository.dropAll();
    const users = await UserRepository.getUsers();
    const input = users.length;
    const actual = 0;
    expect(input).toEqual(actual);
  });
});
