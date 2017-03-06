import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import * as firebase from 'firebase';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id:any;
  listing:any;
  imageUrl:any;
  constructor(private firebaseService:FirebaseService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing=>{
      this.listing=listing;
      console.log(listing);
      
      let storageRef = firebase.storage().ref();
      let spaceRef  = storageRef.child(listing.path);
      storageRef.child(listing.path).getDownloadURL().then((url)=>{
        this.imageUrl = url;
      }).catch((err)=>{
        console.log(err);
      })
    })
  }

}
