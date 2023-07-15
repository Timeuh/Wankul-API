import {Request} from 'express';
import {PrismaClient} from '@prisma/client';
import {Model} from '../api.types';

const prisma = new PrismaClient();

// delete a user
module.exports.deleteEntity = async (request: Request, entityName: Model) => {
  // if the parameter is missing
  if (entityName === 'user'){
    if (!request.body.email) {
      throw new Error('RequestError : you must provide an email !');
    }
  } else {
    if (!request.body.id) {
      throw new Error('RequestError : you must provide an id !');
    }
  }

  // delete the entity
  const deletedUser = await deleteEntity(request, entityName);

  // if the deletion fails
  if (!deletedUser) {
    throw new Error(`DeleteError : can not delete the provided ${entityName} !`);
  }

  // return the deleted entity
  return deletedUser;
};

// delete entity from database
const deleteEntity = async (request: Request, entityName: Model) => {
  switch (entityName){
    case 'artist':
      return deleteArtist(request.body.id);

    case 'card':
      return deleteCard(request.body.id);

    case 'character':
      return deleteCharacter(request.body.id);

    case 'description':
      return deleteDescription(request.body.id);

    case 'rarity':
      return deleteRarity(request.body.id);

    case 'type':
      return deleteType(request.body.id);

    case 'user':
      return deleteUser(request.body.email);

    default:
      return null;
  }
}

// delete artist from database
const deleteArtist = async (artistId: number) => {
  return prisma.artist.delete({
    where: {
      id: artistId
    }
  });
}

// delete card from database
const deleteCard = async (cardId: number) => {
  return prisma.card.delete({
    where: {
      id: cardId
    }
  });
}

// delete character from database
const deleteCharacter = async (characterId: number) => {
  return prisma.character.delete({
    where: {
      id: characterId
    }
  });
}

// delete description from database
const deleteDescription = async (descriptionId: number) => {
  return prisma.description.delete({
    where: {
      id: descriptionId
    }
  });
}

// delete rarity from database
const deleteRarity = async (rarityId: number) => {
  return prisma.rarity.delete({
    where: {
      id: rarityId
    }
  });
}

// delete type from database
const deleteType = async (typeId: number) => {
  return prisma.type.delete({
    where: {
      id: typeId
    }
  });
}

// delete user from database
const deleteUser = async (userId: string) => {
  return prisma.user.delete({
    where: {
      email: userId
    }
  });
}