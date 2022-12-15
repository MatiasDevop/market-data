import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiURL: string = "https://integra1.solutions.webfg.ch/restweb/oauth/token?";
    granttype:string = environment.grantType;
    username:string = environment.userName;
    scope:string = environment.scope;
    password:string = environment.password;
    basic:string = environment.basic;

    constructor(private http: HttpClient) { }

    getToken(): Observable<any>{
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': this.basic });
        let options = { headers: headers };

        return this.http.post<any>(this.apiURL +  `grant_type=${this.granttype}&username=${this.username}&scope=${this.scope}&password=${this.password}`,
        null, options)
        .pipe(map(authModel => {
            return authModel;
        }));
    }
}
