'use strict';

module.exports.name = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      "name":process.env.MY_NAME,
      "nasa api":process.env.NASA_API
    })
  };

  callback(null, response);
};
