// list of database table names
export type Model = 'artist' | 'card' | 'character' | 'description' | 'rarity' | 'type' | 'user';

// plural names for models
export type PluralModel = 'artists' | 'cards' | 'characters' | 'descriptions' | 'rarities' | 'types' | 'users';

// types of request for prisma services
export type RequestType = 'backend' | 'api';