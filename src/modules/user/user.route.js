import Router from 'express';
import UserController from './user.controller';

const usersRouter = () => {
  const router = Router();
  router.route('/users').get(UserController.getUsers).post(UserController.createUser);
  router
    .route('/users/:id')
    .get(UserController.getUserById)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);
  return router;
};

export default usersRouter;
