import { Component } from '@angular/core';
import { Product } from './models/Product';
import { ProductService } from './service/product.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-store';
  products: Product[] = [];

  constructor(private productService: ProductService) {
  this.productService.getProducts().subscribe((res: Product[]) => {
    this.products = res;
  });

  }

}
