import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { SignalrService } from 'src/app/services/signalr.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    displayedColumns: string[] = ['productId',
    'name', 'description',
      'code', 'subscribe'];

    public products: Product[] = [];

    constructor(public productService: ProductService,
        private singleService: SignalrService,
        private toastr: ToastrService) {
          this.getProducts();
          this.singleService.startConnection();
          this.singleService.addProductListener();
      }

    ngOnInit(): void { }

    delay(ms: number){
      return new Promise( resolve => setTimeout(resolve, ms));
    }

    getProducts(){
      this.productService.get().subscribe(res =>{
        console.log(res);
        this.toastr.success("Getting products", "success");
        this.products = res;
      });
    }

    subscribeToProduct(productId:string){
      this.singleService.subscribeToProduct(productId);
    }

}
