const response = (statusCode, message, data, res) => {
   res.status(statusCode).json({
      payload: {
         status: statusCode,
         data: data
      },
      message: message,
      pagination: {
         prev: "",
         next: "",
         max: ""
      }
   });
}

export default response;