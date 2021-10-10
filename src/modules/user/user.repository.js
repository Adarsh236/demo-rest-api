import User from './user.schema';
import logger from '../../logger/api.logger';
import storage from 'node-persist';
import { v1 as uuidV1 } from 'uuid';

storage.init({
  dir: '../users',

  stringify: JSON.stringify,

  parse: JSON.parse,

  encoding: 'utf8',

  logging: false, // can also be custom logging function

  ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object

  expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache

  // in some cases, you (or some other service) might add non-valid storage files to your
  // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
  forgiveParseErrors: false,
});

const USERS = 'users';

const UserRepository = {
  async getUsers() {
    let data = [];
    try {
      // data = await User.find({});
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
      // data = await User.find({ [prop]: val });
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
      // data = await User.create(user);
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
      // data = await User.replaceOne({ [prop]: val }, user);
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
      // data = await User.findByIdAndDelete(userId);
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
