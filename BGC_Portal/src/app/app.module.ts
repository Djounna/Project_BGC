import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7139' }),
    AuthModule.forRoot({
      domain : 'dev-c6lwemo7.us.auth0.com',
      clientId : '3d62hzDj5yxfhxZBYejdE0m8LmU4jPyn',
      cacheLocation : 'localstorage',
      audience: 'https://BGC_WebApi'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
