import { brandReducerInterface } from './brandInterface';
import { UserReducerInterface } from './userInterface';

export interface RootReducerInterface {
  brand: brandReducerInterface;
  user: UserReducerInterface;
}
