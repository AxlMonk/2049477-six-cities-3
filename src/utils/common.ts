import { OffersType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, createdDate, image, type, price, categories, firstname, lastname, email, avatarPath] = tokens;
  return {
    title: title,
    description: description,
    postDate: new Date(createdDate),
    image: image,
    type: OffersType[type as 'Buy' | 'Sell'],
    categories: categories.split(';')
      .map((name) => ({name})),
    price: Number.parseInt(price, 10),
    user: {email, firstname, lastname, avatarPath},
  } as unknown as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  // eslint-disable-next-line no-unused-expressions
  error instanceof Error ? error.message : '';

