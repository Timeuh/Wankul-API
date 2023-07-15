import {Request, Response} from 'express';

const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const {deleteEntity} = require('../../utils/prisma/delete-entity');
const characterSchema = require('../../schemas/character.schema');

// create a character
module.exports.createCharacter = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // create character
    const character = await createEntity(request, characterSchema, 'character');

    // return inserted character
    return response.status(200).json({
      code: 200,
      data: character
    });
  } catch(error: any) {
    // return error if insertion fails
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// get a character from an id
module.exports.getCharacter = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // get character from database
    const character = await getEntity(request, characterSchema, 'character');

    // return the character
    return response.status(200).json({
      code: 200,
      character: character
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update a character
module.exports.updateCharacter = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // update the character
    const updatedCharacter = await updateEntity(request, characterSchema, 'character');

    // return the updated character
    return response.status(200).json({
      code: 200,
      newCharacter: updatedCharacter
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete a character
module.exports.deleteCharacter = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // delete the character
    const deletedCharacter = await deleteEntity(request, 'character');

    // return the deleted character
    return response.status(200).json({
      code: 200,
      deletedCharacter: deletedCharacter
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}