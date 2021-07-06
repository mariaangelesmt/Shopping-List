import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  @Input() shopList : {
    name: string;
    amount: number;
    price: number;
  }[]=[];

  @Input() totalPrice : number = 0;

  @Output() removetoShopList = new EventEmitter();

  removeOnCart(produc: {name: string, amount: number, price: number}) {
    this.removetoShopList.emit(produc);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
