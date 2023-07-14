import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';


const {verifyToken} = require('../../utils/api.functions');
const {validate} = require('../../utils/zod.functions');
const {checkExistence} = require('../../utils/prisma.functions');
const raritySchema = require('../../schemas/rarity.schema');
const prisma = new PrismaClient();

// create a rarity
module.exports.createRarity = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // validate request body data
    const validatedRarity = validate(raritySchema, request.body);

    // check if object already is in database
    await checkExistence('rarity', validatedRarity);

    // insert rarity in database
    const rarity = await prisma.rarity.create({
      data: validatedRarity
    });

    // return inserted rarity
    return response.status(200).json({
      code: 200,
      data: rarity
    });
  } catch(error: any) {
    // return error if insertion fails
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// get a rarity from an id
module.exports.getRarity = async (request: Request, response: Response) => {
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

    // get the rarity from database
    const rarity = await prisma.rarity.findFirst({
      where: {
        id: request.body.id
      }
    });

    // if the rarity doesn't exist
    if (!rarity){
      return response.status(400).json({
        code: 404,
        error: 'RarityError : this rarity doesn\'t exist !'
      });
    }

    // validate rarity object
    const validatedRarity = validate(raritySchema, rarity);

    // return the rarity
    return response.status(200).json({
      code: 200,
      rarity: validatedRarity
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}