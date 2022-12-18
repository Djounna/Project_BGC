/* tslint:disable */
/* eslint-disable */
import { GameVersion } from './game-version';
export interface Game {
  description?: null | string;
  gameId?: number;
  maxNumberPlayers?: null | number;
  minNumberPlayers?: null | number;
  name?: null | string;
  versions?: null | Array<GameVersion>;
}
