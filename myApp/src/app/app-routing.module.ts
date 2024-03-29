import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdpComponent } from './adp/adp.component';
import { AutoComplateDemoComponent } from './auto-complate-demo/auto-complate-demo.component';
import { ClientComponent } from './client/client.component';
import { CommentlistComponent } from './commentlist/commentlist.component';
import { EventComponent } from './event/event.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { JSProjectComponent } from './jsproject/jsproject.component';
import { PostlistComponent } from './postlist/postlist.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { UsernameComponent } from './username/username.component';

import { ProductGuardGuard } from './router_guards/product-guard.guard'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'friends', component: FriendComponent},
  {path: 'home', component: HomeComponent},
  {path: 'username', component:UsernameComponent},
  {path: 'event', component:EventComponent},
  {path: 'jsproject', component:JSProjectComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'product/:productId/photo/:photoId', component:ProductComponent, canActivate:[ProductGuardGuard]},
  {path: 'client', component: ClientComponent},
  {path: 'formdemo', component: FormDemoComponent},
  {path: 'test', component: TestComponent},
  {path: 'comments/:id', component: CommentlistComponent},
  {path: 'post', component: PostlistComponent},
  {path: 'search', component: SearchComponent},
  {path: 'autoComplateDemo', component:AutoComplateDemoComponent},
  {path: 'adp', component:AdpComponent},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
