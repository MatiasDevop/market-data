import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [];
  private url = "https://localhost:7236/api/Product";

  constructor(private http: HttpClient) { }

  public get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
