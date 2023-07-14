import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {validate} = require('../utils/zod.functions');
const {checkExistence} = require('../utils/prisma.functions');
const {verifyToken} = require('../utils/api.functions');
const userSchema = require('../schemas/user.schema');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// create a user
module.exports.createUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // validate request body data
    const validatedUser = validate(userSchema, request.body);

    // check if object already is in database
    await checkExistence('user', validatedUser);

    // hash and set the new password
    await bcrypt.hash(validatedUser.password, 10, async (error: any, hash: string) => {
      if (error) {
        throw new Error('PasswordError : can\'t hash password');
      }

      validatedUser.password = hash;

      // insert user in database
      const user = await prisma.user.create({
        data: validatedUser
      });

      // return inserted user
      return response.status(200).json({
        code: 200,
        data: user
      });
    });
  } catch (error: any) {
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// get a user from an email
module.exports.getUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // if the parameter is missing
    if (!request.body.email){
      return response.status(400).json({
        code: 404,
        error: 'RequestError : you must provide an email !'
      });
    }

    // get the user from database
    const user = await prisma.user.findFirst({
      where: {
        email: request.body.email
      }
    });

    // if the user doesn't exist
    if (!user){
      return response.status(400).json({
        code: 404,
        error: 'UserError : this user doesn\'t exist !'
      });
    }

    // validate user object
    const validatedUser = validate(userSchema, user);

    // delete password from displayed information
    delete validatedUser.password;

    // return the user
    return response.status(200).json({
      code: 200,
      user: validatedUser
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}

// update a user
module.exports.updateUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // validate request body data
    const validatedUser = validate(userSchema, request.body);

    // update the user
    const updatedUser = await prisma.user.update({
      where: {
        email: validatedUser.email
      },
      data: validatedUser
    });

    // if the update fails
    if (!updatedUser){
      return response.status(400).json({
        code: 400,
        message: 'UpdateError : can not update the provided user !'
      });
    }

    // return the updated user
    return response.status(200).json({
      code: 200,
      newUser: updatedUser
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}

// delete a user
module.exports.deleteUser = async (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // if the parameter is missing
    if (!request.body.email){
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

    // if the update fails
    if (!deletedUser){
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
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    });
  }
}