import {Request, Response} from 'express';

const {getEntity} = require('../../utils/prisma/get-entity');
const {getEntityCards} = require('../../utils/prisma/get-entity-cards');
const {getAllEntities} = require('../../utils/prisma/get-all-entities');
const {fillResponseForAllEntities} = require('../../utils/api.functions');
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

    // return the artists
    return response.status(200).json(artistCards);
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}