/* tslint:disable */
/* eslint-disable */
import { GameSession } from './game-session';
import { GameSessionRegistration } from './game-session-registration';
import { RpgCampaign } from './rpg-campaign';
import { RpgCampaignRegistration } from './rpg-campaign-registration';
export interface Member {
  email?: null | string;
  gameSessionRegistrations?: null | Array<GameSessionRegistration>;
  gameSessions?: null | Array<GameSession>;
  memberId?: number;
  name?: null | string;
  rpgCampaignRegistrations?: null | Array<RpgCampaignRegistration>;
  rpgCampaigns?: null | Array<RpgCampaign>;
}
