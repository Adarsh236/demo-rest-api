import buildUser from './user';
import userSchema from './user.schema';

let userValidator = require('../../../helpers/validator').default(userSchema);
let makeUser = buildUser(userValidator);

export default makeUser;
