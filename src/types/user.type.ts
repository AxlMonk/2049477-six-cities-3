import { UserCategoryType } from './user-category.enum';


export type UserType = {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  avatarPath: string;
  userCategories: UserCategoryType;
}
