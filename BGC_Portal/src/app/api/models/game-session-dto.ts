/* tslint:disable */
/* eslint-disable */
import { GameTable } from './game-table';
import { Member } from './member';
import { SessionStatus } from './session-status';
export interface GameSessionDto {
  description?: null | string;
  gameSessionId?: number;
  gameTableId?: null | number;
  length?: null | number;
  maxNumberPlayers?: null | number;
  minNumberPlayers?: null | number;
  name?: null | string;
  organizer?: Member;
  organizerId?: null | number;
  schedule?: string;
  status?: SessionStatus;
  table?: GameTable;
}
