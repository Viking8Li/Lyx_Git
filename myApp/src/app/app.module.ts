import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { 
  AppRoutingModule 
  ,AppComponent
  ,HomeComponent
  ,FriendComponent
  ,UsernameComponent
  ,EventComponent
  ,EventListComponent
  ,JSProjectComponent
  ,ProductComponent
  ,ClientComponent
  ,FormDemoComponent
  ,TestComponent
  ,PostlistComponent
  ,CommentlistComponent
  ,SearchComponent
  ,ApiService
  ,AutoComplateDemoComponent
  ,AdpComponent
} from './index'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    UsernameComponent,
    EventComponent,
    EventListComponent,
    JSProjectComponent,
    ProductComponent,
    ClientComponent,
    FormDemoComponent,
    TestComponent,
    PostlistComponent,
    CommentlistComponent,
    SearchComponent,
    AutoComplateDemoComponent,
    AdpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,    
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [ApiService, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
