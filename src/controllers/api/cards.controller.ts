import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {Card} from '../../utils/api.types';

const {getAllEntities} = require('../../utils/prisma/get-all-entities');
const {fillResponseForAllEntities, deleteCardProperties} = require('../../utils/api.functions');
const cardSchema = require('../../schemas/card.schema');
const prisma = new PrismaClient();

// get a card from an id
module.exports.getCardById = async (request: Request, response: Response) => {
  try {
    // if the id is missing
    if (!request.params.id){
      return response.status(400).json({
        code: 400,
        message: 'RequestError : you must put an id in the url !'
      });
    }

    // get card from database
    const card = await prisma.card.findFirst({
      where: {
        id: parseInt(request.params.id)
      },
      include: {
        artist: true,
        description: {
          include: {
            character: true,
            rarity: true
          }
        },
        type: true
      }
    }) as Card;

    // if the card does not exist
    if (!card) {
      return response.status(400).json({
        code: 400,
        message: 'CardError : this card does not exist !'
      });
    }

    // delete unwanted properties
    deleteCardProperties(card);

    // return the card
    return response.status(200).json({
      card: card,
      links: {
        self: `/api/card/${request.params.id}`,
        all: '/api/card/',
        image: `/api/image/${card.image}`
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

// get all cards
module.exports.getAllCards = async (request: Request, response: Response) => {
  try {
    // get all cards from database
    const cards = await prisma.card.findMany({
      include: {
        artist: true,
        description: {
          include: {
            character: true,
            rarity: true
          }
        },
        type: true
      },
      orderBy:{
        id: 'asc'
      }
    }) as Card[];

    // if the cards are not found
    if (cards.length === 0){
      return response.status(400).json({
        code: 400,
        message: 'RequestError : could not retrieve cards !'
      })
    }

    // create response object
    const responseData = {
      type: 'collection',
      length: cards.length,
      cards: [] as any[]
    }

    // fill response object cards
    cards.forEach((card: Card) => {
      deleteCardProperties(card);
      responseData.cards.push({
        card: card,
        links: {
          self: `/api/card/${card.id}`,
          all: `/api/card/`,
          image: `/api/image/${card.image}`
        }
      });
    });

    // return the cards
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}