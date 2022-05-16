import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { HttpClientModule }  from '@angular/common/http';
import { NixxComponent } from './nixx/nixx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UsernameComponent } from './username/username.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { JSProjectComponent } from './jsproject/jsproject.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    NixxComponent,
    UsernameComponent,
    EventComponent,
    EventListComponent,
    JSProjectComponent,
    ProductComponent,
    ClientComponent,
    FormDemoComponent,
    TestComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
