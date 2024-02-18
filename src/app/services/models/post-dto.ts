/* tslint:disable */
/* eslint-disable */
export interface PostDto {
  id?: number;
  image?: Array<string>;
  itemCategory?: 'LIVRES' | 'ELECTRONIQUE' | 'VETEMENTS' | 'MEUBLES' | 'EQUIPEMENTSPORTIF' | 'AUTRES';
  itemDescription?: string;
  itemName?: string;
  postDate?: string;
  status?: 'AVAILABLE' | 'RESERVED';
  userId?: number;
}
