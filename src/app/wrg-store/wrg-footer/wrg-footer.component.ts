import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-wrg-footer',
  templateUrl: './wrg-footer.component.html',
  styleUrls: ['./wrg-footer.component.css']
})
export class WrgFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(this.showTime(),1000);
  }
  startTime(){
  
  }
  showTime(){
  }
  
  incTime(){
  }


}
