import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Config } from "protractor";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserModel } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {
    url ="http://dev-werereallygood-com.stackstaging.com/admin/parsers/NgApi/NgAuth.php";
    user: UserModel;
    
    
    constructor(private http:HttpClient) {
    }
    
    getDefault(): Observable<UserModel>{
        return this.http.get(`${this.url}`).pipe(
            map((res)=> {
                this.user = res['data'];
                return this.user;
            })
        ,catchError(this.handleError)); 
    }

    handleError(err){
        console.log(err);
        return throwError("Error: "+err);
    }

    ngOnInit(){
        
    }

    route(url){
        return this.http.get(`${url}`).pipe(
            map((res)=>{
                return res['data'];
            }),catchError(this.handleError)
        );
    }
    
}