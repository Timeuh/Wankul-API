import {Request, Response} from 'express';

const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const {deleteEntity} = require('../../utils/prisma/delete-entity');
const raritySchema = require('../../schemas/rarity.schema');

// create a rarity
module.exports.createRarity = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // create rarity
    const rarity = await createEntity(request, raritySchema, 'rarity');

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

    // get rarity from database
    const rarity = await getEntity(request, raritySchema, 'rarity');

    // return the rarity
    return response.status(200).json({
      code: 200,
      rarity: rarity
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update a rarity
module.exports.updateRarity = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // update the rarity
    const updatedRarity = await updateEntity(request, raritySchema, 'rarity');

    // return the updated rarity
    return response.status(200).json({
      code: 200,
      newRarity: updatedRarity
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete a rarity
module.exports.deleteRarity = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // delete the rarity
    const deletedRarity = await deleteEntity(request, 'rarity');

    // return the deleted rarity
    return response.status(200).json({
      code: 200,
      deletedRarity: deletedRarity
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}