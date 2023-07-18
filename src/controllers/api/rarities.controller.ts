import {Request, Response} from 'express';
import {Card, CardsResponse} from '../../utils/api.types';

const {getEntity} = require('../../utils/prisma/get-entity');
const {getEntityCards} = require('../../utils/prisma/get-entity-cards');
const {getAllEntities} = require('../../utils/prisma/get-all-entities');
const {fillResponseForAllEntities, fillResponseWithCards} = require('../../utils/api.functions');
const raritySchema = require('../../schemas/rarity.schema');

// get a rarity from an id
module.exports.getRarityById = async (request: Request, response: Response) => {
  try {
    // get rarity from database
    const rarity = await getEntity(request, raritySchema, 'rarity', 'api');

    // return the rarity
    return response.status(200).json({
      rarity: rarity,
      links: {
        self: `/api/rarity/${request.params.id}`,
        all: '/api/rarity/',
        cards: `/api/rarity/${request.params.id}/cards`
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

// get all rarities
module.exports.getAllRarities = async (request: Request, response: Response) => {
  try {
    // get rarity from database
    const rarities = await getAllEntities(request, raritySchema, 'rarity');

    // get response data object
    const responseData = fillResponseForAllEntities(rarities, raritySchema, 'rarity', 'rarities');

    // return the rarities
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// get rarity related cards
module.exports.getRarityCards = async (request: Request, response: Response) => {
  try {
    // get rarity cards
    const rarityCards = await getEntityCards(request, 'rarity');

    // create response object
    const responseData: CardsResponse<'rarity'> = {
      rarity: rarityCards[0].description.rarity,
      links: {
        self: `/api/rarity/${request.params.id}`,
        all: '/api/rarity/',
        cards: `/api/rarity/${request.params.id}/cards`
      },
      cards:{
        type: 'collection',
        length: rarityCards.length,
        cards: [] as Card[]
      }
    }

    // convert Cards to ActualCards
    fillResponseWithCards(responseData, rarityCards);

    // return the raritys
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}