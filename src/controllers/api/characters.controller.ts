import {Request, Response} from 'express';
import {Card, CardsResponse} from '../../utils/api.types';

const {getEntity} = require('../../utils/prisma/get-entity');
const {getEntityCards} = require('../../utils/prisma/get-entity-cards');
const {getAllEntities} = require('../../utils/prisma/get-all-entities');
const {fillResponseForAllEntities, fillResponseWithCards} = require('../../utils/api.functions');
const characterSchema = require('../../schemas/character.schema');

// get a character from an id
module.exports.getCharacterById = async (request: Request, response: Response) => {
  try {
    // get character from database
    const character = await getEntity(request, characterSchema, 'character', 'api');

    // return the character
    return response.status(200).json({
      character: character,
      links: {
        self: `/api/character/${request.params.id}`,
        all: '/api/character/',
        cards: `/api/character/${request.params.id}/cards`
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

// get all characters
module.exports.getAllCharacters = async (request: Request, response: Response) => {
  try {
    // get character from database
    const characters = await getAllEntities(request, characterSchema, 'character');

    // get response data object
    const responseData = fillResponseForAllEntities(characters, characterSchema, 'character', 'characters');

    // return the characters
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// get character related cards
module.exports.getCharacterCards = async (request: Request, response: Response) => {
  try {
    // get character cards
    const characterCards = await getEntityCards(request, 'character');

    // create response object
    const responseData: CardsResponse<'character'> = {
      character: characterCards[0].description.character,
      links: {
        self: `/api/character/${request.params.id}`,
        all: '/api/character/',
        cards: `/api/character/${request.params.id}/cards`
      },
      cards:{
        type: 'collection',
        length: characterCards.length,
        cards: [] as Card[]
      }
    }

    // convert Cards to ActualCards
    fillResponseWithCards(responseData, characterCards);

    // return the characters
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}