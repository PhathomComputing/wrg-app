import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-wrg-dash',
  templateUrl: './wrg-dash.component.html',
  styleUrls: ['./wrg-dash.component.css']
})
export class WrgDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("sidebar").style.height = String(window.innerHeight-150)+'px';
    document.getElementById("sidebar").innerHTML="test";
  }

    
}
