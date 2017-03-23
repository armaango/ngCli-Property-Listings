import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  title;
  owner;
  bedrooms;
  price;
  image;
  type;
  city;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute 
  ) { }

  ngOnInit() {
    this.id  = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.id).subscribe(listing=>{
      this.title = listing.title;
      this.city = listing.city;
      this.bedrooms = listing.bedrooms;
      this.type = listing.type;
      this.price = listing.price;
      this.owner = listing.owner;

    });
}
onEditSubmit(){
  let listing = {
      title:this.title,
      city:this.city,
      bedrooms:this.bedrooms,
      price:this.price,
      owner:this.owner,
      type:this.type
    }
    this.firebaseService.updateListing(this.id, listing);
    this.router.navigate(['/listings']);
}


}
