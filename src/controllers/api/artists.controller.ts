import {Request, Response} from 'express';

const {getEntity} = require('../../utils/prisma/get-entity');
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
        self: `/api/artist/${request.params.id}`
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