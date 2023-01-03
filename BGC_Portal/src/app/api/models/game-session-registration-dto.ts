/* tslint:disable */
/* eslint-disable */
import { GameSessionDto } from './game-session-dto';
import { MemberDto } from './member-dto';
export interface GameSessionRegistrationDto {
  gameSession?: GameSessionDto;
  gameSessionId?: number;
  gameSessionRegistrationId?: number;
  memberId?: number;
  player?: MemberDto;
}
