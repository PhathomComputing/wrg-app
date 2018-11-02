import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/users.service';
import { UserModel } from './shared/models/user.model';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wrg-app';
  constructor(private userServ:UserService, private auth: AuthService){}

  ngOnInit(){
    this.getPublicUser();
    console.log(this.auth.user );
  }

  getPublicUser(): void {
    this.auth.getDefault().subscribe(
      (res: UserModel) => {
        // console.log(res);

        this.userServ.user = res;
      }
    );

  }
}