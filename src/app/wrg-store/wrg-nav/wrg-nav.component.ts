
import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../../shared/services/users.service'
import { DbRouteService } from '../../shared/services/db-route.service';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-wrg-nav',
  templateUrl: './wrg-nav.component.html',
  styleUrls: ['./wrg-nav.component.css'],
})
export class WrgNavComponent implements OnInit {
  menu = {};

  constructor(public users:UserService, private dbRoute: DbRouteService, private auth:AuthService) { }

  ngOnInit() {
    this.navGenClick();
  }
  
  setupMenu(){
    // for(let i = 0; i< Object.keys(this.received).length; i++){
    //     this.titles[i]= this.received[i];
    //     for(let i = 0+1;){

    //     }
    // }
  }

  navGenClick(){
    this.auth.route("http://dev-werereallygood-com.stackstaging.com/admin/parsers/NgApi/NgRoutes.php?route=nav").subscribe(
     (res: any) => {
       console.log(res);
       this.menu = res;
     }
   );
   }

   prodGenClick(){
    this.auth.route("http://dev-werereallygood-com.stackstaging.com/admin/parsers/NgApi/NgRoutes.php?route=prod").subscribe(
     (res: any) => {
       console.log(res);
     }
   );
   }

  checkMenu(){
  }
}
