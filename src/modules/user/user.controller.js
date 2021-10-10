import UserService from './user.service';
import logger from '../../logger/api.logger';

const UserController = {
  async getUsers(req, res, next) {
    try {
      logger.info('Controller: getUsers');
      UserService.getUsers().then((data) => res.json(data));
    } catch (e) {
      next(e);
    }
  },

  async getUserById(req, res, next) {
    try {
      logger.info('Controller: getUser', req.params.id);
      UserService.getUserBy('id', req.params.id).then((data) => res.json(data));
    } catch (e) {
      next(e);
    }
  },

  async createUser(req, res, next) {
    try {
      logger.info('Controller: createUser');
      UserService.createUser(req.body).then((data) => res.json(data));
    } catch (e) {
      next(e);
    }
  },

  async updateUser(req, res, next) {
    try {
      logger.info('Controller: updateUser');
      UserService.updateUserBy('id', req.params.id, req.body).then((data) => res.json(data));
    } catch (e) {
      next(e);
    }
  },

  async deleteUser(req, res, next) {
    try {
      logger.info('Controller: deleteUser');
      UserService.deleteUserById(req.params.id).then((data) => res.json(data));
    } catch (e) {
      next(e);
    }
  },
};

export default UserController;
