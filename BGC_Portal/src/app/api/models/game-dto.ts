/* tslint:disable */
/* eslint-disable */
import { GameVersionDto } from './game-version-dto';
export interface GameDto {
  description?: null | string;
  gameId?: number;
  maxNumberPlayers?: null | number;
  minNumberPlayers?: null | number;
  name?: null | string;
  versions?: null | Array<GameVersionDto>;
}
