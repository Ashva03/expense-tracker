import { brandReducerInterface } from './brandInterface';
import { CompanyReducerInterface } from './companyReducerInterface';
import { UserReducerInterface } from './userInterface';

export interface RootReducerInterface {
  brand: brandReducerInterface;
  user: UserReducerInterface;
  company: CompanyReducerInterface;
}
