export {};

import {Card, CardsResponse, Model, PluralModel} from './api.types';
import {Request} from 'express';

const {validate} = require('./zod/zod.functions');
const jwt = require('jsonwebtoken');

// verify a jwt token
module.exports.verifyToken = (request: Request) => {
  // get token header and token secret
  const tokenHeader = process.env.TOKEN_HEADER;
  const tokenSecret = process.env.JWT_SECRET;

  // if there is no token header
  if (!tokenHeader) {
    throw new Error('TokenError : missing token header in .env !');
  }

  // get the token from request
  const token = request.headers[tokenHeader];

  // if there is no token in request
  if (!token) {
    throw new Error('RequestError : you must provide a token !');
  }

  // verify the token
  const verified = jwt.verify(token, tokenSecret);

  // if the token isn't verified
  if (!verified) {
    throw new Error('TokenError : can not verify the token !');
  }

  return true;
};

// create response object for getAll for any entity
module.exports.fillResponseForAllEntities = (entities: Array<any>, schema: any, entityName: Model, pluralName: PluralModel) => {
  // create response data object
  const responseData = {
    type: 'collection',
    length: entities.length,
    [pluralName]: [] as any[]
  };

  // fill response data object
  entities.forEach((entity: any) => {
    // check if object is a valid artist
    const validatedEntity = validate(schema, entity);

    // fill responseData
    (responseData[pluralName] as any).push({
      [entityName]: validatedEntity,
      links: {
        self: `/api/${entityName}/${validatedEntity.id}`,
        all: `/api/${entityName}/`,
        cards: `/api/${entityName}/${validatedEntity.id}/cards`
      }
    });
  });

  // return the response data object
  return responseData;
};

// fill response object with cards
module.exports.fillResponseWithCards = <ModelKey extends Model>(responseObject: CardsResponse<ModelKey>, cards: Array<Card>) => {
  cards.forEach((card: Card) => {
    // delete unwanted properties
    module.exports.deleteCardProperties(card);

    // push into response object
    responseObject.cards.cards.push({
      card: card,
      links: {
        self: `/api/card/${card.id}`,
        all: '/api/card/',
        image: `/api/image/${card.image}`
      }
    });
  });
};

// delete unwanted card properties
module.exports.deleteCardProperties = (card: Card) => {
  delete card.description_id;
  delete card.type_id;
  delete card.artist_id;
  delete card.description.character_id;
  delete card.description.rarity_id;
};