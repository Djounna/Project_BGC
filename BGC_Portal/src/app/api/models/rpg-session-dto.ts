/* tslint:disable */
/* eslint-disable */
import { GameTableDto } from './game-table-dto';
import { RpgCampaignDto } from './rpg-campaign-dto';
import { SessionStatus } from './session-status';
export interface RpgSessionDto {
  campaign?: RpgCampaignDto;
  description?: null | string;
  gameTableId?: null | number;
  name?: null | string;
  rpgCampaignId?: number;
  rpgSessionId?: number;
  schedule?: string;
  status?: SessionStatus;
  table?: GameTableDto;
}
