/* tslint:disable */
/* eslint-disable */
import { GameTableDto } from './game-table-dto';
import { MemberDto } from './member-dto';
import { SessionStatus } from './session-status';
export interface GameSessionDto {
  description?: null | string;
  gameSessionId?: number;
  gameTableId?: null | number;
  length?: null | number;
  maxNumberPlayers?: null | number;
  minNumberPlayers?: null | number;
  name?: null | string;
  organizer?: MemberDto;
  organizerId?: null | number;
  schedule?: string;
  status?: SessionStatus;
  table?: GameTableDto;
}
