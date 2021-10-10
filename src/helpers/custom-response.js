const CustomResponse = {
  success(data) {
    return {
      success: true,
      status: 200,
      data,
    };
  },
  error(data, statusCode = 404) {
    return {
      success: false,
      status: statusCode,
      data,
    };
  },
};

export default CustomResponse;
