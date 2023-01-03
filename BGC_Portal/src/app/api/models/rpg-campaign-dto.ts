/* tslint:disable */
/* eslint-disable */
import { MemberDto } from './member-dto';
export interface RpgCampaignDto {
  description?: null | string;
  name?: null | string;
  organizer?: MemberDto;
  organizerId?: null | number;
  rpgCampaignId?: number;
}
