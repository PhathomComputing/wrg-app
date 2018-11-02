import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/products.service';
import { DebuggingService } from '../../../shared/services/debugging.service';

@Component({
  selector: 'app-wrg-grid',
  templateUrl: './wrg-grid.component.html',
  styleUrls: ['./wrg-grid.component.css'],
  providers:[ DebuggingService]
})
export class WrgGridComponent implements OnInit {
  constructor(public productServ:ProductService,
              private debug:DebuggingService) {    }

  ngOnInit() {
    
    this.debug.toLog("Hello World");
    this.productServ.populateProducts();
    this.productServ.printSetDetails();
    

  }

}
