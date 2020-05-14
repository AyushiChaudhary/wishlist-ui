import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Wishlist } from '../models/wishlist';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  productsId:string[]=[]
  wishlist:Wishlist[] = []
  productList:Product[]=[]
  wishlistService: any;
  submitted:boolean;
  
  constructor(private service:WishlistService,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.loadWishlist();
 
   
}


loadWishlist(){
  this.service.getWishlist("ayu1").subscribe((data:Wishlist[])=>{
    this.wishlist=data;
  })
}

  delete(productId:string) {
   // sessionStorage.setItem("userId","ayu1");
    this.submitted = true;
    if(confirm("Do you want to delete this item ?")){
      this.service.removeFromWishlist("ayu1",productId).subscribe(() => {
     this.loadWishlist();
      },(error)=>{
        alert("Error while during remove wishlist")
      })
    }

  
  }

}
 

