import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ArticleReducer } from './store/reducers/course.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
    ,StoreModule.forRoot(ArticleReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
