import { Product } from './product';

export class Wishlist {
    wishlistId:number;
    productId:string
	productPrice:number
	 userName:string
	 userId:string
     productName:string

    constructor(uname:string,uid:string,product:Product){
       this.userId=uid;
       this.userName=uname;
       this.productId=product.productId;
       this.productName=product.productName

       this.productPrice=product.productPrice
    }
}
