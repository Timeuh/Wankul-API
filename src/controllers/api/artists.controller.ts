import {Request, Response} from 'express';
import {Card, CardsResponse} from '../../utils/api.types';

const {getEntity} = require('../../utils/prisma/get-entity');
const {getEntityCards} = require('../../utils/prisma/get-entity-cards');
const {getAllEntities} = require('../../utils/prisma/get-all-entities');
const {fillResponseForAllEntities, fillResponseWithCards} = require('../../utils/api.functions');
const artistSchema = require('../../schemas/artist.schema');

// get an artist from an id
module.exports.getArtistById = async (request: Request, response: Response) => {
  try {
    // get artist from database
    const artist = await getEntity(request, artistSchema, 'artist', 'api');

    // return the artist
    return response.status(200).json({
      artist: artist,
      links: {
        self: `/api/artist/${request.params.id}`,
        all: '/api/artist/'
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

// get all artists
module.exports.getAllArtists = async (request: Request, response: Response) => {
  try {
    // get artist from database
    const artists = await getAllEntities(request, artistSchema, 'artist');

    // get response data object
    const responseData = fillResponseForAllEntities(artists, artistSchema, 'artist', 'artists');

    // return the artists
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// get artist related cards
module.exports.getArtistCards = async (request: Request, response: Response) => {
  try {
    // get artist cards
    const artistCards = await getEntityCards(request, 'artist');

    // create response object
    const responseData: CardsResponse<'artist'> = {
      artist: artistCards[0].artist,
      links: {
        self: `/api/artist/${artistCards[0].artist.id}`,
        all: '/api/artist/'
      },
      cards:{
        type: 'collection',
        length: artistCards.length,
        cards: [] as Card[]
      }
    }

    // convert Cards to ActualCards
    fillResponseWithCards(responseData, artistCards);

    // return the artists
    return response.status(200).json(responseData);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}