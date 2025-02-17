const errorHandler = (err, req, res) => {

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      success: false,
      error: {
        message,
      },
    });
  };
  
  export default errorHandler;
  