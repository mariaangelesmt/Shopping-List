import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() productToShow: {
    name: string;
    amount: number;
    price: number;
  } = {name: "", amount: 0, price:0};

  @Output() removeToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeOnItem(){
    this.removeToCart.emit(this.productToShow);
  }

}
