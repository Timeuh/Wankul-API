import {Request} from 'express';
import {PrismaClient} from '@prisma/client';
import {Model} from '../api.types';

const prisma = new PrismaClient();

// get all entities
module.exports.getAllEntities = async (request: Request, schema: any, entityName: Model) => {
  // get the entities from database
  const entities = await getEntities(request, entityName);

  // if the entities don't exist
  if (!entities) {
    throw new Error(`RequestError : can not get all ${entityName}`);
  }

  // validate and return the entities
  return entities;
};

// get entity from database
const getEntities = async (request: Request, entityName: Model) => {
  switch (entityName) {
    case 'artist':
      return getArtists();

    case 'card':
      return getCards();

    case 'character':
      return getCharacters();

    case 'description':
      return getDescriptions();

    case 'rarity':
      return getRarities();

    case 'type':
      return getTypes();

    case 'user':
      return null;

    default:
      return null;
  }
};

// get all artists from database
const getArtists = async () => {
  return prisma.artist.findMany();
};

// get all cards from database
const getCards = async () => {
  return prisma.card.findMany();
};

// get all characters from database
const getCharacters = async () => {
  return prisma.character.findMany();
};


// get all descriptions from database
const getDescriptions = async () => {
  return prisma.description.findMany();
};

// get all rarities from database
const getRarities = async () => {
  return prisma.rarity.findMany();
};

// get all types from database
const getTypes = async () => {
  return prisma.type.findFirst();
};