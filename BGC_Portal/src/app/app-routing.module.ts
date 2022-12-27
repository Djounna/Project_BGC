import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { CalendarComponent } from './calendar/calendar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AllSessionsComponent } from './game-sessions/all-sessions/all-sessions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : 'home', component : HomepageComponent},
  {path : '', redirectTo: 'home', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'catalog', component : CatalogComponent},
  {path : 'calendar', component : CalendarComponent},
  {path : 'game-sessions', component: AllSessionsComponent},
  {path : 'not-found', component: NotFoundComponent},
  {path : '**', redirectTo : 'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
