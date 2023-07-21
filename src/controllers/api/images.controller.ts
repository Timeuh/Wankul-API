import {Request, Response} from 'express';

const path = require('path');
const fs = require('fs');

// get a type from an id
module.exports.getImage = async (request: Request, response: Response) => {
  try {
    // check if the image name is provided
    if (!request.params.imageName){
      return response.status(404).send({
        code: 404,
        message: 'RequestError : you must provide an image name in url !'
      });
    }

    // create image path
    const imagePath = path.join(__dirname, '../../../public/images', request.params.imageName);

    // check if file exists
    fs.access(imagePath, fs.constants.F_OK, (err: any) => {
      if (err) {
        // if the file is not found
        return response.status(404).send({
          code: 404,
          message: 'RequestError : can not find this image !'
        });
      } else {
        // return the file as response
        return response.sendFile(imagePath);
      }
    });
  } catch (error: any){
    // in case of error, return the error
    return response.status(500).json({
      code: 500,
      message: error.message
    });
  }
}