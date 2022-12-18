/* tslint:disable */
/* eslint-disable */
import { GameTable } from './game-table';
import { RpgCampaign } from './rpg-campaign';
import { RpgSessionGame } from './rpg-session-game';
import { SessionStatus } from './session-status';
export interface RpgSession {
  campaign?: RpgCampaign;
  description?: null | string;
  gameTableId?: null | number;
  name?: null | string;
  rpgCampaignId?: number;
  rpgSessionGames?: null | Array<RpgSessionGame>;
  rpgSessionId?: number;
  schedule?: string;
  status?: SessionStatus;
  table?: GameTable;
}
