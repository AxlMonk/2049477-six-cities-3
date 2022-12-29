import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface';
import { OfferCategoryType } from '../../types/offer-category.enum';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): {
    categories: { name: string }[]; description: string; image: string; postDate: Date;
    price: number; title: string; type: OfferCategoryType; user: { firstname: string; avatarPath: string; email: string; lastname: string }
  }[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, city,imageUrl, image, type,
        price, categories, roomsCount, firstname, lastname, email, guestsCount,
        avatarPath, facilities, password]) => ({
        title,
        description,
        postDate: new Date(postDate),
        image,
        city,
        imageUrl,
        type: OfferCategoryType[type as 'Premium' | 'Favorites'],
        categories: categories.split(';')
          .map((name) => ({name})),
        price: Number.parseInt(price, 10),
        roomsCount,
        guestsCount,
        password,
        facilities: facilities.split(';')
          .map((variant) => ({variant})),
        user: {email, firstname, lastname, avatarPath},
      }));
  }
}
