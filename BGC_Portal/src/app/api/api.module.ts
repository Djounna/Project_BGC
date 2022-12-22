/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { GameService } from './services/game.service';
import { GameSessionService } from './services/game-session.service';
import { GameSessionRegistrationService } from './services/game-session-registration.service';
import { GameTableService } from './services/game-table.service';
import { GameVersionService } from './services/game-version.service';
import { MemberService } from './services/member.service';
import { RpgCampaignService } from './services/rpg-campaign.service';
import { RpgCampaignRegistrationService } from './services/rpg-campaign-registration.service';
import { RpgSessionService } from './services/rpg-session.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    GameService,
    GameSessionService,
    GameSessionRegistrationService,
    GameTableService,
    GameVersionService,
    MemberService,
    RpgCampaignService,
    RpgCampaignRegistrationService,
    RpgSessionService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
