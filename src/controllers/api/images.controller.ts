import {Request, Response} from 'express';
import path from 'path';
import fs from 'fs';

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

    // Vérifier si le fichier image existe
    fs.access(imagePath, fs.constants.F_OK, (err: any) => {
      if (err) {
        // Le fichier n'existe pas, renvoyer une réponse 404 Not Found
        return response.status(404).send({
          code: 404,
          message: 'RequestError : can not find this image !'
        });
      } else {
        // Le fichier existe, renvoyer l'image en tant que réponse
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