import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Wishlist } from '../models/wishlist';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl:string;
   userId:string;
  wishList:number[]=[];
  constructor(private http: HttpClient) {
    this.baseUrl="http://localhost:9000/wishlist";
   }

   getProductsId(userId:string):Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(`${this.baseUrl}/${userId}`).pipe(
      map((result: Wishlist[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.productId))

        return productIds;
      })
    )
  }
  getWishlist(userId:string):Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(`${this.baseUrl}/${userId}`);
  
  }

  addWishlist(product:Product):Observable<Wishlist>{
    let wishlistObj=new Wishlist("ayushi","ayu1",product);
    return this.http.post<Wishlist>(`${this.baseUrl}/productId`,wishlistObj)
  }
  removeFromWishlist(userId:string,productId:any):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${userId}/${productId}`)
  }


  }

 


  
  