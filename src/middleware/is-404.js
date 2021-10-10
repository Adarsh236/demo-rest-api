import CustomResponse from '../helpers/custom-response';

export default (req, res, next) => {
  return res.status(404).json(CustomResponse.error({ message: "404, route doesn't exist." }));
};
