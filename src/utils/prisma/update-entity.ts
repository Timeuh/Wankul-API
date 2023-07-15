import {Request} from 'express';
import {PrismaClient} from '@prisma/client';
import {Model} from '../api.types';

const {validate} = require('../../utils/zod/zod.functions');
const prisma = new PrismaClient();

// update an entity
module.exports.updateEntity = async (request: Request, schema: any, entityName: Model) => {
  // validate request body data
  const validatedEntity = validate(schema, request.body);

  // update the entity
  const updatedEntity = await updateEntity(validatedEntity, entityName);

  // if the update fails
  if (!updatedEntity){
    throw new Error(`UpdateError : can not update the provided ${entityName} !`);
  }

  // return the updated entity
  return updatedEntity;
}

// update the entity in database
const updateEntity = async (newEntity: any, entityName: Model) => {
  switch (entityName){
    case 'artist':
      return updateArtist(newEntity);

    case 'card':
      return updateCard(newEntity);

    case 'character':
      return updateCharacter(newEntity);

    case 'description':
      return updateDescription(newEntity);

    case 'rarity':
      return updateRarity(newEntity);

    case 'type':
      return updateType(newEntity);

    case 'user':
      return updateUser(newEntity);

    default:
      return null;
  }
}

// update artist in database
const updateArtist = async (newArtist: any) => {
  return prisma.artist.update({
    where: {
      id: newArtist.id
    },
    data: newArtist
  });
}

// update card in database
const updateCard = async (newCard: any) => {
  return prisma.card.update({
    where: {
      id: newCard.id
    },
    data: newCard
  });
}

// update character in database
const updateCharacter = async (newCharacter: any) => {
  return prisma.character.update({
    where: {
      id: newCharacter.id
    },
    data: newCharacter
  });
}

// update description in database
const updateDescription = async (newDescription: any) => {
  return prisma.description.update({
    where: {
      id: newDescription.id
    },
    data: newDescription
  });
}

// update rarity in database
const updateRarity = async (newRarity: any) => {
  return prisma.rarity.update({
    where: {
      id: newRarity.id
    },
    data: newRarity
  });
}

// update type in database
const updateType = async (newType: any) => {
  return prisma.type.update({
    where: {
      id: newType.id
    },
    data: newType
  });
}

// update user in database
const updateUser = async (newUser: any) => {
  return prisma.user.update({
    where: {
      email: newUser.email
    },
    data: newUser
  });
}