/* tslint:disable */
/* eslint-disable */
import { Member } from './member';
import { RpgCampaignRegistration } from './rpg-campaign-registration';
import { RpgSession } from './rpg-session';
export interface RpgCampaign {
  description?: null | string;
  name?: null | string;
  organizer?: Member;
  organizerId?: null | number;
  rpgCampaignId?: number;
  rpgCampaignRegistrations?: null | Array<RpgCampaignRegistration>;
  sessions?: null | Array<RpgSession>;
}
