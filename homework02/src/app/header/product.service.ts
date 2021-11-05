import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable ({
    providedIn: 'root'

})

export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts (): IProduct[] {
        return [
            {
                "productId": 2,
                "productCode": "djj-0909",
                "imageUrl": "http://placehold.it/100x100",
                "productName": "playstation",
                "rating": 5,
                "addcart": 'acquista playstation'

              },
              {
                "imageUrl": "http://placehold.it/100x100",
                "productName": "xbox",
                "productId": 3,
                "productCode": "rgu-6666",
                "rating": 3.5,
                "addcart": 'acquista xbox'

              },
              {
                "productName" : "intendods",
                "imageUrl": "http://placehold.it/100x100",
                "productId": 3,
                "productCode": "rgu-6666",
                "rating": 4,
                "addcart": 'acquista intendods'

              }
        ]
    }
    url= 'http://jsonplaceholder.typicode.com/posts';
    getApi() {
      return this.http.get(this.url)
    }
}
