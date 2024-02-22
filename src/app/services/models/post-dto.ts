/* tslint:disable */
/* eslint-disable */
export interface PostDto {
  id?: number;
  itemCategory?: 'LIVRES' | 'ELECTRONIQUE' | 'VETEMENTS' | 'MEUBLES' | 'EQUIPEMENTSPORTIF' | 'AUTRES';
  itemDescription?: string;
  itemName?: string;
  ownerFullName?: string;
  postDate?: string;
  status?: 'AVAILABLE' | 'RESERVED';
  userId?: number;
}
