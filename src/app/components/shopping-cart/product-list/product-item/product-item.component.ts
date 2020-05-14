import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'

import { WishlistService } from 'src/app/services/wishlist.service';
import { Wishlist } from 'src/app/models/wishlist';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;

  constructor(

    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }



  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist("ayu1",this.productItem.productId).subscribe(() => {
      alert("Item removed from wishlist sucessfully!")
      this.addedToWishlist = false;
    },(error)=>{
      alert("Error while during remove wishlist")
    })
  }
  handleAddToWishlist() {
    this.wishlistService.addWishlist(this.productItem).subscribe((data)=>{
     
      this.addedToWishlist = true;
    },(error)=>{
      alert("Error while during add wishlist")
    })
      
    
  }


}
