import {Request, Response} from 'express';
import {Card, CardsResponse} from '../../utils/api.types';

const {getEntity} = require('../../utils/prisma/get-entity');
const {getEntityCards} = require('../../utils/prisma/get-entity-cards');
const {getAllEntities} = require('../../utils/prisma/get-all-entities');
const {fillResponseForAllEntities, fillResponseWithCards} = require('../../utils/api.functions');
const typeSchema = require('../../schemas/type.schema');

// get a type from an id
module.exports.getTypeById = async (request: Request, response: Response) => {
  try {
    // get type from database
    const type = await getEntity(request, typeSchema, 'type', 'api');

    // return the type
    return response.status(200).json({
      type: type,
      links: {
        self: `/api/type/${request.params.id}`,
        all: '/api/type/',
        cards: `/api/type/${request.params.id}/cards`
      }
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// get all types
module.exports.getAllTypes = async (request: Request, response: Response) => {
  try {
    // get type from database
    const types = await getAllEntities(request, typeSchema, 'type');

    // get response data object
    const responseData = fillResponseForAllEntities(types, typeSchema, 'type', 'types');

    // return the types
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// get type related cards
module.exports.getTypeCards = async (request: Request, response: Response) => {
  try {
    // get type cards
    const typeCards = await getEntityCards(request, 'type');

    // create response object
    const responseData: CardsResponse<'type'> = {
      type: typeCards[0].type,
      links: {
        self: `/api/type/${request.params.id}`,
        all: '/api/type/',
        cards: `/api/type/${request.params.id}/cards`
      },
      cards:{
        type: 'collection',
        length: typeCards.length,
        cards: [] as Card[]
      }
    }

    // convert Cards to ActualCards
    fillResponseWithCards(responseData, typeCards);

    // return the types
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}