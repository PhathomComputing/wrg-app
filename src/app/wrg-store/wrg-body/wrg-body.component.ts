import { Component, OnInit } from '@angular/core';
import { DebuggingService } from '../../shared/services/debugging.service';

@Component({
  selector: 'app-wrg-body',
  templateUrl: './wrg-body.component.html',
  styleUrls: ['./wrg-body.component.css']
})
export class WrgBodyComponent implements OnInit {

  constructor(private debug: DebuggingService) { }

  ngOnInit() {
  }
  
}
