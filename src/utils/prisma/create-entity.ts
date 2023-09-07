import {Request} from 'express';
import {Model} from '../api.types';
import {PrismaClient} from '@prisma/client';

const {validate} = require('../../utils/zod/zod.functions');
const {checkExistence} = require('../../utils/prisma/check-existence');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// create an entity
module.exports.createEntity = async (request: Request, schema: any, entityName: Model) => {
  // validate request body data
  const validatedEntity = validate(schema, request.body);

  // check if object already is in database
  await checkExistence(entityName, validatedEntity);

  // insert entity and get it
  const entity = await insertEntity(entityName, validatedEntity);

  // if the entity is not created
  if (!entity){
    throw new Error(`CreationError : can not create ${entityName}`);
  }

  // return inserted entity
  return entity;
};

// insert entity in database
const insertEntity = async (entityName: Model, validatedEntity: any) => {
  switch (entityName) {
    case 'artist':
      return await createArtist(validatedEntity);

    case 'card':
      return await createCard(validatedEntity);

    case 'character':
      return await createCharacter(validatedEntity);

    case 'description':
      return await createDescription(validatedEntity);

    case 'rarity':
      return await createRarity(validatedEntity);

    case 'type':
      return await createType(validatedEntity);

    case 'user':
      return await createUser(validatedEntity);

    default:
      return null;
  }
}

// insert an artist in database
const createArtist = async (validatedEntity: any) => {
  return prisma.artist.create({
    data: validatedEntity
  });
};

// insert a card in database
const createCard = async (validatedEntity: any) => {
  return prisma.card.create({
    data: validatedEntity
  });
};

// insert a character in database
const createCharacter = async (validatedEntity: any) => {
  return prisma.character.create({
    data: validatedEntity
  });
};

// insert a description in database
const createDescription = async (validatedEntity: any) => {
  return prisma.description.create({
    data: validatedEntity
  });
};

// insert a rarity in database
const createRarity = async (validatedEntity: any) => {
  return prisma.rarity.create({
    data: validatedEntity
  });
};

// insert a type in database
const createType = async (validatedEntity: any) => {
  return prisma.type.create({
    data: validatedEntity
  });
};

// insert a user in database
const createUser = async (validatedEntity: any) => {
  // hash and set the new password
  return new Promise((resolve, reject) => {
    bcrypt.hash(validatedEntity.password, 10, async (error: any, hash: string) => {
      if (error) {
        reject(new Error('PasswordError: impossible de hacher le mot de passe'));
      } else {
        validatedEntity.password = hash;
        resolve(
          // insert user in database
          await prisma.user.create({ data: validatedEntity })
        );
      }
    });
  });
}