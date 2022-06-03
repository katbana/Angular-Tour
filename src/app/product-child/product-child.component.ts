import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css'],
})
export class ProductChildComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() {}

  ngOnInit(): void {}
}
