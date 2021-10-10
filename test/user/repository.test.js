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

/* 
let usersDb = require('../users-db/index');

describe('usersDb', () => {
    beforeEach(async () => {
        await usersDb.dropAll();
        let howie = {
            name: 'howie',
            age: 12,
            grade: 3,
            prefect: true,
        };
        let bill = {
            name: 'bill',
            age: 13,
            grade: 3,
            prefect: false,
        };
        await usersDb.addUser(howie);
        await usersDb.addUser(bill);
    });

    it('drops database', async () => {
        await usersDb.dropAll();
        let users = await usersDb.listUsers();
        let input = users.length;
        let actual = 0;
        expect(input).to.equal(actual);
    });

    it('lists users', async () => {
        let input = await usersDb.listUsers();
        let actual = 2;
        expect(input.length).to.equal(actual);
    });

    it('find single user by id', async () => {
        let users = await usersDb.listUsers();
        let id = users[0].id;

        let user = await usersDb.findUser('id', id);
        let input = user.id;
        let actual = id;
        expect(input).to.eql(actual);
    });

    it('finds all users by property', async () => {
        let users = await usersDb.findUsersBy('grade', 3);
        let input = users.map((el) => el.name);
        let actual = ['howie', 'bill'];
        expect(input).to.eql(actual);
    });

    it('inserts a user', async () => {
        let felix = {
            name: 'felix',
            grade: 2,
            age: 6,
        };
        let newUser = await usersDb.addUser(felix);
        let { id, ...input } = newUser;
        let actual = {
            name: 'felix',
            grade: 2,
            age: 6,
            prefect: false,
        };
        expect(input).to.eql(actual);
    });

    it('throws error if inserts a user with invalid payload', () => {
        let invalid = {
            name: 'bill',
            grade: 'INSERT POISON INTO THIS',
        };
        expect(() => {
            usersDb.addUser(invalid);
        }).to.throw('grade must be a number');
    });

    it('deletes a user', async () => {
        let users = await usersDb.listUsers();
        let id = users[0].id.toString();
        let validInput = await usersDb.deleteUser(id);
        let validActual = {
            status: 'success',
            id,
        };
        expect(validInput).to.eql(validActual);

        let newUsers = await usersDb.listUsers();
        let inputLength = newUsers.length;
        let actualLength = 1;
        expect(inputLength).to.equal(actualLength);

        let invalidInput = await usersDb.deleteUser(42);
        let invalidActual = {
            status: 'fail',
        };
        expect(invalidInput).to.eql(invalidActual);
    });
});
 */
