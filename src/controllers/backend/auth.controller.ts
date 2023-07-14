import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const {verifyToken} = require('../../utils/api.functions');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

// authenticate a user and return a jwt token
module.exports.authenticate = async (request: Request, response: Response) => {
  try {
    // get user from request
    const user = request.body;

    // get user in database
    const actualUser = await prisma.user.findFirst({
      where: {
        email: user.email
      }
    })

    // if the user doesn't exist, return an error
    if (!actualUser){
      return response.status(404).json({
        code: 404,
        error: 'UserError : there is no user with this email !'
      });
    }

    // compare the two passwords
    await bcrypt.compare(user.password, actualUser.password, (error: any, result: boolean) => {
      // if the comparison fails, return an error
      if (error){
        return response.status(400).json({
          code: 400,
          error: 'PasswordError : problem during password hash comparison !'
        });
      }

      // if passwords doesn't match, return an error
      if (!result){
        return response.status(400).json({
          code: 400,
          error: 'PasswordError : your password does not match !'
        });
      }

      // get jwt secret from env
      const secret = process.env.JWT_SECRET;

      // create jwt data
      const data = {
        time: Date(),
        user: actualUser.email,
        name: actualUser.name,
        lastname: actualUser.lastname
      };

      // set jwt expire time
      const expireTime = {
        expiresIn: '1h'
      };

      // create jwt
      const token = jwt.sign(data, secret, expireTime);

      // return jwt
      return response.status(200).json({
        code: 200,
        token: token
      });
    });
  } catch (error: any) {
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      error: error.message
    })
  }
}

// verify a jwt
module.exports.verifyToken = (request: Request, response: Response) => {
  try {
    // verify the jwt token
    verifyToken(request);

    // if the token is verified
    return response.status(200).json({
      code: 200,
      message: "verification successful"
    });
  } catch(error: any) {
    // in case of error, return the error
    response.status(500).json({
      code: 500,
      error: error.message
    });
  }
};