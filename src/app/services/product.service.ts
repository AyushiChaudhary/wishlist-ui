import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl="assets/products.json";
  productList:Product[]=[];
 

  

  constructor(private http: HttpClient) { }

/*getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }*/
  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiurl);
  }
}
