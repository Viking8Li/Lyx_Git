import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';

const routes: Routes = [
  {path: 'events', component:EventsListComponent}
  ,{path: '', component:EventsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
