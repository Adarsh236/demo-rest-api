import validateUser from './validator'; // model
import serialize from './serializer'; // serializer custom to db
import UserRepository from './user.repository';
import CustomResponse from '../..//helpers/custom-response';

const UserService = {
  createNewUserObj(user) {
    return {
      name: user.getName(),
      dob: user.getDob(),
      address: user.getAddress(),
      description: user.getDescription(),
    };
  },

  async getUsers() {
    try {
      const data = await UserRepository.getUsers();
      return CustomResponse.success(serialize(data));
    } catch (err) {
      return CustomResponse.error({
        message: err.message,
      });
    }
  },

  async getUserBy(prop, val) {
    try {
      if (prop === 'id') prop = '_id';
      const data = await UserRepository.getUser(prop, val);
      return CustomResponse.success(serialize(data, 'obj'));
    } catch (err) {
      return CustomResponse.error({
        message: err.message,
      });
    }
  },

  async createUser(user) {
    try {
      const db = validateUser(user);
      const newUser = this.createNewUserObj(db);
      const data = await UserRepository.createUser(newUser);
      return CustomResponse.success(serialize(data));
    } catch (err) {
      return CustomResponse.error({
        message: err.message,
      });
    }
  },

  async updateUserBy(prop, val, user) {
    try {
      if (prop === 'id') prop = '_id';
      const db = validateUser(user);
      const newUser = this.createNewUserObj(db);
      const data = await UserRepository.updateUser(prop, val, newUser);
      return CustomResponse.success(serialize(data));
    } catch (err) {
      return CustomResponse.error({
        message: err.message,
      });
    }
  },

  async deleteUserById(id) {
    try {
      const resp = await UserRepository.deleteUser(id);
      return CustomResponse.success({
        id: id,
      });
    } catch (err) {
      return CustomResponse.error({
        message: err.message,
      });
    }
  },
};

export default UserService;
