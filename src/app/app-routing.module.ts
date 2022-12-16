import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './components/market/market.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:'product', component: ProductComponent
  },
  {
    path:'market', component: MarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
