/* tslint:disable */
/* eslint-disable */
import { GameSession } from './game-session';
import { RpgSession } from './rpg-session';
export interface GameTable {
  gameSessions?: null | Array<GameSession>;
  gameTableId?: number;
  rpgSessions?: null | Array<RpgSession>;
  size?: number;
}
