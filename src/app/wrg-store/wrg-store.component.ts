import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-wrg-store',
  templateUrl: './wrg-store.component.html',
  styleUrls: ['./wrg-store.component.css']
})
export class WrgStoreComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {

  }

}
