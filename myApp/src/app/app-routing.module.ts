import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { JSProjectComponent } from './jsproject/jsproject.component';
import { NixxComponent } from './nixx/nixx.component';
import { UsernameComponent } from './username/username.component';

const routes: Routes = [
  {path: '', component: HomeComponent, outlet: 'first'},
  {path: 'friends', component: FriendComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nixx', component: NixxComponent},
  {path: 'username', component:UsernameComponent},
  {path: 'event', component:EventComponent},
  {path: 'jsproject', component:JSProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
