import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';

import { wishlistUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: Product[] | any) => {
        let productIds: any[] = []

        result.forEach((item: { id: any; }) => productIds.push(item.id))

        return productIds;
      })
    )
  }
  addToWishlist(productId: any) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId: any) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}