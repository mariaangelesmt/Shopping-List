import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shopList : {
    name: string;
    amount: number;
    price: number;
  }[]=[];  
  
  actualProduct: string = "";
  actualAmount: number = 0;
  actualPrice: number = 0;
  totalPrice: number = 0;



  deleteProduct(produc: {
    name: string;
    amount: number;
    price: number;
  } ) {
    this.shopList = this.shopList.filter(element => element.name != produc.name);
    this.totalPrice -= produc.price * produc.amount;
  }

  
  add() {
    this.shopList.push({
      name: this.actualProduct,
      amount: this.actualAmount,
      price: this.actualPrice
    });
    this.totalPrice = this.shopList.reduce((prev, next) => prev + next.price * next.amount, 0);
    this.actualProduct = "";
    this.actualAmount = 0;
    this.actualPrice = 0;

  }




  constructor() { }

  ngOnInit(): void {
  }

}
