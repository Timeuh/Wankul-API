export{}

import {Model, PluralModel} from './api.types';
import {Request} from 'express';

const {validate} = require('./zod/zod.functions');
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

// create response object for getAll for any entity
module.exports.fillResponseForAllEntities = (entities: Array<any>, schema: any, entityName: Model, pluralName: PluralModel) => {
  // create response data object
  const responseData = {
    type: 'collection',
    length: entities.length,
    [pluralName]: [] as any[]
  }

  // fill response data object
  entities.forEach((entity: any) => {
    // check if object is a valid artist
    const validatedEntity = validate(schema, entity);

    // fill responseData
    (responseData[pluralName] as any).push({
      [entityName]: validatedEntity,
      links: {
        self: `/api/${entityName}/${validatedEntity.id}`
      }
    })
  });

  // return the response data object
  return responseData;
}