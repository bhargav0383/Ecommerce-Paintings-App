import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService,
    private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }

  getTotalPrice(): number {
    let total = 0;
    for(let item of this.cartItems){
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe({
      next: () => {
        this.snackbar.open("Cart is cleared!", "", {
         duration: 2000,
         horizontalPosition: 'right',
         verticalPosition: 'top'
        })
     }
    });
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe({
      next: () => {
        this.snackbar.open("Cart is checked out!", "", {
         duration: 2000,
         horizontalPosition: 'right',
         verticalPosition: 'top'
        })
     }
    });
  }

}
