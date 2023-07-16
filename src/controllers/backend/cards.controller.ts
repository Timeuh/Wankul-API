import {Request, Response} from 'express';

const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const {deleteEntity} = require('../../utils/prisma/delete-entity');
const cardSchema = require('../../schemas/card.schema');

// create a card
module.exports.createCard = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // create card
    const card = await createEntity(request, cardSchema, 'card');

    // return inserted card
    return response.status(200).json({
      code: 200,
      data: card
    });
  } catch(error: any) {
    // return error if insertion fails
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// get a card from an id
module.exports.getCard = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // get card from database
    const card = await getEntity(request, cardSchema, 'card');

    // return the card
    return response.status(200).json({
      code: 200,
      card: card
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update a card
module.exports.updateCard = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // update the card
    const updatedCard = await updateEntity(request, cardSchema, 'card');

    // return the updated card
    return response.status(200).json({
      code: 200,
      newCard: updatedCard
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete a card
module.exports.deleteCard = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // delete the card
    const deletedCard = await deleteEntity(request, 'card');

    // return the deleted card
    return response.status(200).json({
      code: 200,
      deletedCard: deletedCard
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}