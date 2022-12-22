/* tslint:disable */
/* eslint-disable */
import { Member } from './member';
import { RpgCampaign } from './rpg-campaign';
export interface RpgCampaignRegistrationDto {
  memberId?: number;
  player?: Member;
  rpgCampaign?: RpgCampaign;
  rpgCampaignId?: number;
  rpgCampaignRegistrationId?: number;
}
