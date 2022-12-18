/* tslint:disable */
/* eslint-disable */
import { GameSession } from './game-session';
import { Member } from './member';
export interface GameSessionRegistration {
  gameSession?: GameSession;
  gameSessionId?: number;
  gameSessionRegistrationId?: number;
  memberId?: number;
  player?: Member;
}
