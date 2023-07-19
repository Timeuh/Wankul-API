// list of database table names
export type Model = 'artist' | 'card' | 'character' | 'description' | 'rarity' | 'type' | 'user';

// plural names for models
export type PluralModel = 'artists' | 'cards' | 'characters' | 'descriptions' | 'rarities' | 'types' | 'users';

// types of request for prisma services
export type RequestType = 'backend' | 'api';

export type CardsResponse<T extends Model> = {
  [Key in T]: object
} & {
  links: {
    self: string,
    all: string,
    cards: string
  },
  cards: {
    type: string,
    length: number,
    cards: Card[]
  },
}

// represent a card with all attributes
export type Card = {
  id: number,
  name: string,
  collection: string,
  description_id?: number,
  type_id?: number,
  artist_id?: number,
  image: string,
  artist: {
    id: number,
    name: string
  },
  description: {
    id: number,
    winner_effect: string,
    looser_effect: string,
    special: string,
    character_id?: number,
    effect: string,
    citation: string,
    rarity_id?: number,
    character: {
      id: number,
      name: string
    },
    rarity: {
      id: number,
      name: string
    }
  },
  type: {
    id: number,
    name: string
  }
}