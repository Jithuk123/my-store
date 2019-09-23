import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // products: Product[] = [

  //   {
  //     ProductName: `Skybags Komet`,
  //     description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
  //     image: `https://assets.croma.com/medias/sys_master/images/images/h63/ha7/8812016009246/206794_pjpeg.jpg`,
  //     isAvailable: true
  //   },

  //   {
  //     ProductName: `Rolex Yacht-Master 42`,
  //     description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
  //     image: `http://www.thailand-traveler.com/images/thailand-traveler/4552-watch-rolex-png.jpg`,
  //     isAvailable: true
  //   },

  //   {
  //     ProductName: `Echo-Spot-speaker`,
  //     description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
  //     image: `https://cdn.images.express.co.uk/img/dynamic/59/590x/Amazon-Echo-Spot-speaker-905290.jpg`,
  //     isAvailable: true
  //   },
  //   {
  //     ProductName: `Echo-Spot-speaker`,
  //     description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
  //     image: `https://5.imimg.com/data5/WQ/UJ/MY-36868853/nike-zoom-pegasus-33-mens-running-shoes-500x500.jpg`,
  //     isAvailable: true
  //   }
  // ];

getProducts() {
  return this.httpClient.get('http://localhost:3000/product');
}
}
