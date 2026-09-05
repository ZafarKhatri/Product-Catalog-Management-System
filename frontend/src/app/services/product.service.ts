import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
