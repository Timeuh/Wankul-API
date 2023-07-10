import {PrismaClient} from '@prisma/client';
import {Model} from './apiTypes';

// get prisma client
const prisma = new PrismaClient();

// check if object already exists in database
module.exports.checkExistence = async (model: Model, validatedObject: any) => {
  // result of existence check
  let existence = null;

  // check if record already exists
  switch (model){
    case 'artist':
      existence = await checkArtistExistence(validatedObject);
      break;

    default:
      break;
  }

  // if so, throw an error
  if (existence){
    throw new Error('DuplicateError : this artist already exists !');
  }
}

// check existence of an artist
const checkArtistExistence = async (validatedObject: any)=> {
  return prisma.artist.findFirst({
    where: {
      id: validatedObject.id
    }
  });
}