import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers: [ProductService]
})
export class HeaderComponent implements OnInit {
  title = 'miosito';
  imageWidth: number = 50;
  showImage: boolean = false;
  listFilter: string = '';
  /*
  private _productService;
  constructor(productService: ProductService) {
    this._productService = productService;
  }
  */

  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get products_filtered(): IProduct[] {
    if (!this.listFilter) {
      return this.products;
    }
    let filterBy = this.listFilter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onStarClick(rating: number): void {
    alert('il prodotto ha ' + rating + ' stelle');
  }

  onCartClick(addcart: string): void {
    alert(addcart + ' OK');
  }
  api: any = [];
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log('prodotti : ', this.products);

    this.productService.getApi().subscribe(
      (data) => this.api.push(data),
      (err) => console.log(err)
    );
    console.log(this.api);
  }
}
