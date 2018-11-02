import { Injectable } from '@angular/core';
import {AuthService}  from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DbRouteService {

  constructor(private auth:AuthService) { }

  getRoute(url){
    return this.auth.route(url);
  }
}
