import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {createEntity} = require('../../utils/prisma/create-entity');
const {getEntity} = require('../../utils/prisma/get-entity');
const {updateEntity} = require('../../utils/prisma/update-entity');
const {verifyToken} = require('../../utils/api.functions');
const userSchema = require('../../schemas/user.schema');
const prisma = new PrismaClient();

// create a user
module.exports.createUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // create user
    const user = await createEntity(request, userSchema, 'user');

    // return inserted user
    return response.status(200).json({
      code: 200,
      data: user
    });
  } catch (error: any) {
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
};

// get a user from an email
module.exports.getUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // validate user object
    const user = await getEntity(request, userSchema, 'user');

    // delete password from displayed information
    delete user.password;

    // return the user
    return response.status(200).json({
      code: 200,
      user: user
    });
  } catch (error: any) {
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
};

// update a user
module.exports.updateUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // update the user
    const updatedUser = await updateEntity(request, userSchema, 'user');

    // return the updated user
    return response.status(200).json({
      code: 200,
      newUser: updatedUser
    });
  } catch (error: any) {
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
};

// delete a user
module.exports.deleteUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // if the parameter is missing
    if (!request.body.email) {
      return response.status(400).json({
        code: 404,
        error: 'RequestError : you must provide an email !'
      });
    }

    // delete the user
    const deletedUser = await prisma.user.delete({
      where: {
        email: request.body.email
      }
    });

    // if the deletion fails
    if (!deletedUser) {
      return response.status(400).json({
        code: 400,
        message: 'DeleteError : can not delete the provided user !'
      });
    }

    // return the deleted user
    return response.status(200).json({
      code: 200,
      deletedUser: deletedUser
    });
  } catch (error: any) {
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
};