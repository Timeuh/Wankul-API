import {Request} from 'express';
import {PrismaClient} from '@prisma/client';
import {Model} from '../api.types';

const prisma = new PrismaClient();

// get an entity from an id
module.exports.getEntityCards = async (request: Request, entityName: Model) => {
  // if the parameter is missing from url
  if (!request.params.id){
    throw new Error('RequestError : you must put an id in your url !');
  }

  // get the entity from database
  const entityCards = await getEntityCards(request, entityName);

  // if the entity doesn't exist
  if (!entityCards){
    throw new Error(`RequestError : cards of ${entityName} don't exist !`);
  }

  // return the entity related cards
  return entityCards;
}

// get entity related cards
const getEntityCards = async (request: Request, entityName: Model) => {
  switch (entityName){
    case 'artist':
      return getArtistCards(parseInt(request.params.id));

    case 'card':
      return null;

    case 'character':
      return getCharacterCards(parseInt(request.params.id));

    case 'description':
      return getDescriptionCards(parseInt(request.params.id));

    case 'rarity':
      return getRarityCards(parseInt(request.params.id));

    case 'type':
      return getTypeCards(parseInt(request.params.id));

    case 'user':
      return null;

    default:
      return null;
  }
}

// get cards of an artist
const getArtistCards = async (artistId: number) => {
  return prisma.card.findMany({
    where: {
      artist_id: artistId
    },
    include: {
      artist: true,
      description: {
        include: {
          character: true,
          rarity: true
        }
      },
      type: true
    }
  });
}

// get cards of a character
const getCharacterCards = async (characterId: number) => {
  return prisma.card.findMany({
    where: {
      description: {
        character_id: characterId
      }
    },
    include: {
      artist: true,
      description: {
        include: {
          character: true,
          rarity: true
        }
      },
      type: true
    }
  });
}


// get cards of a description
const getDescriptionCards = async (descriptionId: number) => {
  return prisma.card.findMany({
    where: {
      description_id: descriptionId
    },
    include: {
      artist: true,
      description: {
        include: {
          character: true,
          rarity: true
        }
      },
      type: true
    }
  });
}

// get cards of a rarity
const getRarityCards = async (rarityId: number) => {
  return prisma.card.findMany({
    where: {
      description: {
        rarity_id: rarityId
      }
    },
    include: {
      artist: true,
      description: {
        include: {
          character: true,
          rarity: true
        }
      },
      type: true
    }
  });
}

// get cards of a type
const getTypeCards = async (typeId: number) => {
  return prisma.card.findMany({
    where: {
      type_id: typeId
    },
    include: {
      artist: true,
      description: {
        include: {
          character: true,
          rarity: true
        }
      },
      type: true
    }
  });
}