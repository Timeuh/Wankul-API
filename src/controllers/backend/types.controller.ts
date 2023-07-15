import {Request, Response} from 'express';

const {verifyToken} = require('../../utils/api.functions');
const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const {deleteEntity} = require('../../utils/prisma/delete-entity');
const typeSchema = require('../../schemas/type.schema');

// create a type
module.exports.createType = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // create type
    const type = await createEntity(request, typeSchema, 'type');

    // return inserted type
    return response.status(200).json({
      code: 200,
      data: type
    });
  } catch(error: any) {
    // return error if insertion fails
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// get a type from an id
module.exports.getType = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // get type from database
    const type = await getEntity(request, typeSchema, 'type');

    // return the type
    return response.status(200).json({
      code: 200,
      type: type
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update a type
module.exports.updateType = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // update the type
    const updatedType = await updateEntity(request, typeSchema, 'type');

    // return the updated type
    return response.status(200).json({
      code: 200,
      newType: updatedType
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete a type
module.exports.deleteType = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // delete the type
    const deletedType = await deleteEntity(request, 'type');

    // return the deleted type
    return response.status(200).json({
      code: 200,
      deletedType: deletedType
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}