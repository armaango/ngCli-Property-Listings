import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';


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


const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'listings',component:ListingsComponent},
  {path:'add-listing',component:AddListingComponent}
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
