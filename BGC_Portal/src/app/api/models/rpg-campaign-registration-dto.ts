/* tslint:disable */
/* eslint-disable */
import { MemberDto } from './member-dto';
import { RpgCampaignDto } from './rpg-campaign-dto';
export interface RpgCampaignRegistrationDto {
  memberId?: number;
  player?: MemberDto;
  rpgCampaign?: RpgCampaignDto;
  rpgCampaignId?: number;
  rpgCampaignRegistrationId?: number;
}
