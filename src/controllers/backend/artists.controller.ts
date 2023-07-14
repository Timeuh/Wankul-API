import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {validate} = require('../../utils/zod/zod.functions');
const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const artistSchema = require('../../schemas/artist.schema');
const prisma = new PrismaClient();

// create an artist
module.exports.createArtist = async (request: Request, response: Response) => {
  try {
    // create artist
    const artist = await createEntity(request, artistSchema, 'artist');

    // return inserted artist
    return response.status(200).json({
      code: 200,
      data: artist
    });
  } catch(error: any) {
    // return error if insertion fails
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// get an artist from an id
module.exports.getArtist = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // if the parameter is missing
    if (!request.body.id){
      return response.status(400).json({
        code: 404,
        error: 'RequestError : you must provide an id !'
      });
    }

    // get the artist from database
    const artist = await prisma.artist.findFirst({
      where: {
        id: request.body.id
      }
    });

    // if the artist doesn't exist
    if (!artist){
      return response.status(400).json({
        code: 404,
        error: 'ArtistError : this artist doesn\'t exist !'
      });
    }

    // validate artist object
    const validatedArtist = validate(artistSchema, artist);

    // return the artist
    return response.status(200).json({
      code: 200,
      rarity: validatedArtist
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update an artist
module.exports.updateArtist = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // validate request body data
    const validatedArtist = validate(artistSchema, request.body);

    // update the artist
    const updatedArtist = await prisma.artist.update({
      where: {
        id: validatedArtist.id
      },
      data: validatedArtist
    });

    // if the update fails
    if (!updatedArtist){
      return response.status(400).json({
        code: 400,
        message: 'UpdateError : can not update the provided artist !'
      });
    }

    // return the updated artist
    return response.status(200).json({
      code: 200,
      newArtist: updatedArtist
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete an artist
module.exports.deleteArtist = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // if the parameter is missing
    if (!request.body.id){
      return response.status(400).json({
        code: 404,
        error: 'RequestError : you must provide an id !'
      });
    }

    // delete the artist
    const deletedArtist = await prisma.artist.delete({
      where: {
        id: request.body.id
      }
    });

    // if the deletion fails
    if (!deletedArtist){
      return response.status(400).json({
        code: 400,
        message: 'DeleteError : can not delete the provided artist !'
      });
    }

    // return the deleted artist
    return response.status(200).json({
      code: 200,
      deletedArtist: deletedArtist
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}