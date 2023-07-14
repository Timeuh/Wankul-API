import {PrismaClient} from '@prisma/client';
import {Model} from './api.types';

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

    case 'user':
      existence = await checkUserExistence(validatedObject);
      break;

    case 'rarity':
      existence = await checkRarityExistence(validatedObject);
      break;

    default:
      break;
  }

  // if so, throw an error
  if (existence){
    throw new Error(`DuplicateError : this ${model} already exists !`);
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

// check existence of a user
const checkUserExistence = async (validatedObject: any) => {
  return prisma.user.findFirst({
    where: {
      email: validatedObject.email
    }
  });
}


// check existence of a rarity
const checkRarityExistence = async (validatedObject: any) => {
  return prisma.rarity.findFirst({
    where: {
      id: validatedObject.id
    }
  });
}