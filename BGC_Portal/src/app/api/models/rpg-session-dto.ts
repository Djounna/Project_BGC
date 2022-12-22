/* tslint:disable */
/* eslint-disable */
import { GameTable } from './game-table';
import { RpgCampaign } from './rpg-campaign';
import { SessionStatus } from './session-status';
export interface RpgSessionDto {
  campaign?: RpgCampaign;
  description?: null | string;
  gameTableId?: null | number;
  name?: null | string;
  rpgCampaignId?: number;
  rpgSessionId?: number;
  schedule?: string;
  status?: SessionStatus;
  table?: GameTable;
}
