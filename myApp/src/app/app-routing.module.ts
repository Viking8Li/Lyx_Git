import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { NixxComponent } from './nixx/nixx.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'friends', component: FriendComponent},
  {path: '', component: HomeComponent},
  {path: 'nixx', component: NixxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
