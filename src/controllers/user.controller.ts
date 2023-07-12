import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {validate} = require('../utils/zodFunctions');
const {checkExistence} = require('../utils/prismaFunctions');
const userSchema = require('../schemas/user.schema');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// create a user
module.exports.createUser = async (request: Request, response: Response) => {
  try {
    // validate request body data
    const validatedUser = validate(userSchema, request.body);

    // check if object already is in database
    await checkExistence('user', validatedUser);

    // hash and set the new password
    await bcrypt.hash(validatedUser.password, 10, (error: any, hash: string) => {
      if (error) {
        throw new Error('PasswordError : can\'t hash password');
      }

      validatedUser.password = hash;
    });

    // insert user in database
    const user = await prisma.user.create({
      data: validatedUser
    });

    // return inserted user
    return response.status(200).json({
      code: 200,
      data: user
    });
  } catch (error: any) {
    response.status(500).json({
      code: 500,
      message: error.message
    })
  }
}