import { v1 as uuidV1 } from 'uuid';
import DB from '../../configs/db.config';
import logger from '../../logger/api.logger';

const storage = DB.initialize();
const USERS = 'users';

const UserRepository = {
  async getUsers() {
    let data = [];
    try {
      data = await storage.getItem(USERS);

      if (typeof data === 'undefined') {
        data = [];
      }
    } catch (err) {
      logger.error(`Error from logger:: ${err}`);
    }
    return data;
  },

  async getUser(prop, val) {
    let data = {};
    try {
      const users = await this.getUsers();
      data = users.filter((user) => user.id === val);
      if (data.length < 1) {
        throw new Error(`User id doesn't exist: ${userId}`);
      }
    } catch (err) {
      logger.error(`Error from logger:: ${err}`);
    }
    return data;
  },

  async createUser(user) {
    let data = {};
    try {
      user.id = uuidV1();
      user.createdAt = new Date();
      user.updatedAt = new Date();

      let users = await this.getUsers();
      users.push(user);
      await storage.setItem(USERS, users);
      data = user;
    } catch (err) {
      logger.error(`Error from logger:: ${err}`);
    }
    return data;
  },

  async updateUser(prop, val, newUser) {
    let data = {};
    try {
      newUser.updatedAt = new Date();
      const oldUsers = await this.getUsers();
      const newUsers = oldUsers.map((user) => (user.id === val ? { ...user, ...newUser } : user));
      await storage.setItem(USERS, newUsers);
      data = await this.getUser('id', val);
    } catch (err) {
      logger.error(`Error from logger:: ${err}`);
    }
    return data;
  },

  async deleteUser(userId) {
    let data = {};
    try {
      const users = await this.getUsers();
      const result = users.filter((user) => user.id != userId);
      if (users.length === result.length) {
        throw new Error(`User id doesn't exist: ${userId}`);
      }
      data = await storage.setItem(USERS, result);
    } catch (err) {
      logger.error(`Error from logger:: ${err}`);
    }
    return data;
  },
};

export default UserRepository;
