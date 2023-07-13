import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {validate} = require('../utils/zod.functions');
const {verifyToken} = require('../utils/api.functions');
const {checkExistence} = require('../utils/prisma.functions');
const artistSchema = require('../schemas/artist.schema');
const prisma = new PrismaClient();

// create an artist
module.exports.createArtist = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // validate request body data
    const validatedArtist = validate(artistSchema, request.body);

    // check if object already is in database
    await checkExistence('artist', validatedArtist);

    // insert artist in database
    const artist = await prisma.artist.create({
      data: validatedArtist
    });

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