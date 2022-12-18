/* tslint:disable */
/* eslint-disable */
import { GameSessionGame } from './game-session-game';
import { GameSessionRegistration } from './game-session-registration';
import { GameTable } from './game-table';
import { Member } from './member';
import { SessionStatus } from './session-status';
export interface GameSession {
  description?: null | string;
  gameSessionId?: number;
  gameSessionRegistrations?: null | Array<GameSessionRegistration>;
  gameTable?: GameTable;
  gameTableId?: null | number;
  gamesSessionGames?: null | Array<GameSessionGame>;
  length?: null | number;
  maxNumberPlayers?: null | number;
  minNumberPlayers?: null | number;
  name?: null | string;
  organizer?: Member;
  organizerId?: null | number;
  schedule?: string;
  status?: SessionStatus;
}
