import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FlashMessagesModule} from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import {FirebaseService} from './services/firebase.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDujkRSMEKJvvxtzat6EGMF7h5UGkn6gu8',
  authDomain: 'proplistings-b1879.firebaseapp.com',
  databaseURL: 'https://proplistings-b1879.firebaseio.com',
  storageBucket: 'proplistings-b1879.appspot.com',
  messagingSenderId: '62765117686'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};



const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'listings',component:ListingsComponent},
  {path:'add-listing',component:AddListingComponent},
  {path:'listing/:id',component:ListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
