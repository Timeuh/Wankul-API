import {Request, Response} from 'express';

const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const {deleteEntity} = require('../../utils/prisma/delete-entity');
const descriptionSchema = require('../../schemas/description.schema');

// create a description
module.exports.createDescription = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // create description
    const description = await createEntity(request, descriptionSchema, 'description');

    // return inserted description
    return response.status(200).json({
      code: 200,
      data: description
    });
  } catch(error: any) {
    // return error if insertion fails
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// get a description from an id
module.exports.getDescription = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // get description from database
    const description = await getEntity(request, descriptionSchema, 'description');

    // return the description
    return response.status(200).json({
      code: 200,
      description: description
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update a description
module.exports.updateDescription = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // update the description
    const updatedDescription = await updateEntity(request, descriptionSchema, 'description');

    // return the updated description
    return response.status(200).json({
      code: 200,
      newDescription: updatedDescription
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete a description
module.exports.deleteDescription = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // delete the description
    const deletedDescription = await deleteEntity(request, 'description');

    // return the deleted description
    return response.status(200).json({
      code: 200,
      deletedDescription: deletedDescription
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}