/* tslint:disable */
/* eslint-disable */
import { GameVersion } from './game-version';
import { RpgSession } from './rpg-session';
export interface RpgSessionGame {
  gameVersion?: GameVersion;
  gameVersionId?: number;
  rpgSession?: RpgSession;
  rpgSessionGameId?: number;
  rpgSessionId?: number;
}
