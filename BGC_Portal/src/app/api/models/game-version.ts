/* tslint:disable */
/* eslint-disable */
import { Game } from './game';
import { GameSessionGame } from './game-session-game';
import { RpgSessionGame } from './rpg-session-game';
export interface GameVersion {
  game?: Game;
  gameId?: number;
  gameSessionGames?: null | Array<GameSessionGame>;
  gameVersionId?: number;
  rpgSessionGames?: null | Array<RpgSessionGame>;
}
