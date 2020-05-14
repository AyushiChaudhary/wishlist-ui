import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: string[] = []

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
  
    this.productService.getProductList().subscribe((products) => {
      this.productList = products;
    })
  }

loadWishlist() {
  
  this.wishlistService.getProductsId("ayu1").subscribe((data:[])=>{
    this.wishlist=data;
  },(error)=>{
    alert("error while during fetching wishlist")
  })
  }
}
