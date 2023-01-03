import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { ApiModule } from './api/api.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { GameCardComponent } from './catalog/game-card/game-card.component';
import { AddGameComponent } from './catalog/add-game/add-game.component';
import { GameSessionsComponent } from './game-sessions/game-sessions.component';
import { AllSessionsComponent } from './game-sessions/all-sessions/all-sessions.component';
import {
  MatTable,
  MatTableModule,
  MatTableDataSource,
} from '@angular/material/table';
import { MemberSessionsComponent } from './game-sessions/member-sessions/member-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    HomepageComponent,
    NotFoundComponent,
    CatalogComponent,
    CalendarComponent,
    GameCardComponent,
    AddGameComponent,
    GameSessionsComponent,
    AllSessionsComponent,
    MemberSessionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7139' }),
    AuthModule.forRoot({
      domain: 'dev-c6lwemo7.us.auth0.com',
      clientId: '3d62hzDj5yxfhxZBYejdE0m8LmU4jPyn',
      cacheLocation: 'localstorage',
      audience: 'https://BGC_WebApi',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
