import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [{
  path: '',
  component: ProductListComponent
},

{
path : 'checkout',
component : CheckoutComponent
},

{
  path: 'product/:productId',
  component: ProductDetailsComponent
},
{
  path: '**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
