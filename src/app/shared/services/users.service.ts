import { UserModel } from '../models/user.model';
import { OnInit } from '@angular/core';


export class UserService implements OnInit{
    
    loggedIn: boolean = false;
    user: UserModel;
    

    constructor() {
        this.setCookie();
    }

    ngOnInit() {

    }
    isLoggedIn(){
        return this.loggedIn;
    }
    onLogin(){
        let loggedIn=true;
        console.log("Is logged in: "+loggedIn);
    }

    onLogout(){
        let loggedIn=false;
        console.log("Is logged in: "+loggedIn);
    }

    setCookie (){
        let date = new Date();
        date.setTime(date.getTime()+(1000*60*60*24*2));
        let expires = "expires="+date.toTimeString();
        window.document.cookie = "Login=true;"+expires;
    }

}