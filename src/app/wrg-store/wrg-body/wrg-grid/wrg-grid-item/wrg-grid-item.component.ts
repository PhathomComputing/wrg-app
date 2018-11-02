import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../../../Shared/models/product.model';

@Component({
  selector: 'app-wrg-grid-item',
  templateUrl: './wrg-grid-item.component.html',
  styleUrls: ['./wrg-grid-item.component.css']
})
export class WrgGridItemComponent implements OnInit {
  @Input() product:ProductModel;
  constructor() { }

  ngOnInit() {
  }

}
