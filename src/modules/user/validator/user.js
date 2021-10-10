const buildUser = (userValidator) => {
  return ({ name, dob, address, description } = {}) => {
    const { error } = userValidator({
      name,
      dob,
      address,
      description,
    });

    if (error) {
      throw new Error(error);
    } else {
      return {
        getName: () => name,
        getDob: () => dob,
        getAddress: () => address,
        getDescription: () => description,
      };
    }
  };
};

export default buildUser;
