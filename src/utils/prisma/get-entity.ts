import {Request} from 'express';
import {PrismaClient} from '@prisma/client';
import {Model} from '../api.types';

const {validate} = require('../../utils/zod/zod.functions');
const prisma = new PrismaClient();

// get an entity from an id
module.exports.getEntity = async (request: Request, schema: any, entityName: Model) => {
  // if the parameter is missing from request
  if (entityName === 'user'){
    if (!request.body.email){
      throw new Error('RequestError : you must provide an email !');
    }
  } else {
    if (!request.body.id){
      throw new Error('RequestError : you must provide an id !');
    }
  }

  // get the entity from database
  const entity = await getEntity(request, entityName);

  // if the entity doesn't exist
  if (!entity){
    throw new Error(`RequestError : this ${entityName} doesn't exist !`);
  }

  // validate and return the entity
  return validate(schema, entity);
}

// get entity from database
const getEntity = async (request: Request, entityName: Model) => {
  switch (entityName){
    case 'artist':
      return getArtist(request.body.id);

    case 'card':
      return getCard(request.body.id);

    case 'character':
      return getCharacter(request.body.id);

    case 'description':
      return getDescription(request.body.id);

    case 'rarity':
      return getRarity(request.body.id);

    case 'type':
      return getType(request.body.id);

    case 'user':
      return getUser(request.body.email);

    default:
      return null;
  }
}

// get an artist from database
const getArtist = async (artistId: number) => {
  return prisma.artist.findFirst({
    where: {
      id: artistId
    }
  });
}

// get a card from database
const getCard = async (cardId: number) => {
  return prisma.card.findFirst({
    where: {
      id: cardId
    }
  });
}

// get a character from database
const getCharacter = async (characterId: number) => {
  return prisma.character.findFirst({
    where: {
      id: characterId
    }
  });
}


// get a description from database
const getDescription = async (descriptionId: number) => {
  return prisma.description.findFirst({
    where: {
      id: descriptionId
    }
  });
}

// get a rarity from database
const getRarity = async (rarityId: number) => {
  return prisma.rarity.findFirst({
    where: {
      id: rarityId
    }
  });
}

// get a type from database
const getType = async (typeId: number) => {
  return prisma.type.findFirst({
    where: {
      id: typeId
    }
  });
}

// get a user from database
const getUser = async (userEmail: string) => {
  return prisma.user.findFirst({
    where: {
      email: userEmail
    }
  });
}