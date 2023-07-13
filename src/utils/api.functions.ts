export{}

import {Request} from 'express';
const jwt = require('jsonwebtoken');

// verify a jwt token
module.exports.verifyToken = (request: Request) => {
  // get token header and token secret
  const tokenHeader = process.env.TOKEN_HEADER;
  const tokenSecret = process.env.JWT_SECRET;

  // if there is no token header
  if (!tokenHeader){
    throw new Error('TokenError : missing token header in .env !');
  }

  // get the token from request
  const token = request.headers[tokenHeader];

  // if there is no token in request
  if (!token){
    throw new Error('RequestError : you must provide a token !');
  }

  // verify the token
  const verified = jwt.verify(token, tokenSecret);

  // if the token isn't verified
  if (!verified){
    throw new Error('TokenError : can not verify the token !');
  }

  return true;
}