import { OfferCategoryType } from './offer-category.enum';
import { UserType } from './user.type';
import { OffersType } from './offer-type.enum';
import { FacilitiesType } from './facilities.type';
import { CommentsType } from './comments.type';
import { CoordinatesType } from './coordinates.type';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: string;
  imageUrl: string;
  image: string[];
  categories: OfferCategoryType[];
  price: number;
  type: OffersType[];
  roomsCount: number;
  guestsCount: number;
  facilities: FacilitiesType[];
  commentsCount: CommentsType[];
  coordinates: CoordinatesType;
  user: UserType;
}
