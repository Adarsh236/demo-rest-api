import { Router } from 'express';
import usersRouter from '../modules/user/user.route';

const apiRouter = () => {
  const apiRouter = Router();

  apiRouter.use(usersRouter());
  return apiRouter;
};

export default apiRouter;
