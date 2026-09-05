import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { name: '', price: 0, category: '' };
  isLoading = false;
  message = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data) => { this.products = data; this.isLoading = false; },
      error: (err) => { this.message = 'Error loading products'; this.isLoading = false; }
    });
  }

  addProduct(): void {
    if (!this.newProduct.name || !this.newProduct.price) {
      this.message = 'Name and Price are required!';
      return;
    }
    this.productService.addProduct(this.newProduct).subscribe({
      next: () => {
        this.message = 'Product added successfully!';
        this.newProduct = { name: '', price: 0, category: '' };
        this.loadProducts();
      },
      error: () => { this.message = 'Error adding product'; }
    });
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => { this.message = 'Product deleted!'; this.loadProducts(); },
        error: () => { this.message = 'Error deleting product'; }
      });
    }
  }
}
