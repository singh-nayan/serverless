'use strict';

module.exports.addition = (event, context, callback) => {
  const a=Number(event.queryStringParameters.a);
  const b=Number(event.queryStringParameters.b);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      "sum":a+b,
      "nasa api":process.env.NASA_API,
      "name":process.env.MY_NAME,
    })
  };

  callback(null, response);
};

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message:"hello world"
      })
  };

  callback(null, response);
};

module.exports.subtraction = (event, context, callback) => {
  const a=Number(event.queryStringParameters.a);
  const b=Number(event.queryStringParameters.b);
	console.log(event.queryStringParameters);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      "difference":a-b,
      "name":process.env.MY_NAME,
      "nasa api":process.env.NASA_API
    }) 
  };

  callback(null, response);
};
