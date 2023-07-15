import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const artistSchema = require('../../schemas/artist.schema');
const prisma = new PrismaClient();

// create an artist
module.exports.createArtist = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

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
    // get artist from database
    const artist = await getEntity(request, artistSchema, 'artist');

    // return the artist
    return response.status(200).json({
      code: 200,
      rarity: artist
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
    // update the artist
    const updatedArtist = await updateEntity(request, artistSchema, 'artist');

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