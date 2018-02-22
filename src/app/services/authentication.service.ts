import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private serviceUrl = 'http://106.51.56.235:8081/geopulse/geo/api/v1/Extlogin';
    constructor(private http: HttpClient) { }
    login(loginData) {
       console.log(loginData);
         return this.http.post<any>(this.serviceUrl, loginData)
            .map(user => {
                 if (user ) {
                     sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }
    
    logout() {
        sessionStorage.removeItem('currentUser');
    }
}