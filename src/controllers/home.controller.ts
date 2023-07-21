import {Request, Response} from 'express';

const markdownIt = require('markdown-it');
const md = new markdownIt();
const path = require('path');
const fs = require('fs');

// get a type from an id
module.exports.getReadme = async (request: Request, response: Response) => {
  try {
    // create image path
    const imagePath = path.join(__dirname, '../../README.md');

    // check if the file exists
    fs.readFile(imagePath, 'utf8', (err: any, data: any) => {
      if (err) {
        // if the file is not found
        return response.status(404).send({
          code: 404,
          message: 'RequestError : can not read README file !'
        });
      } else {
        // convert markdown content to html
        const htmlContent = md.render(data);

        // return the file content
        return response.send(htmlContent);
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