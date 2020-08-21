import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    api = 'https://5e7f9bd27a92ed0016560818.mockapi.io/product';
    constructor(private http: HttpClient,   private router: Router,) { }

    login(emailId: string, password: string) {


        const headers = new HttpHeaders(
            emailId && password ? {
              authorization:'Basic ' + btoa(emailId + ':' + password)
            }:{}
          );

        return this.http.get<any>(`${this.api}}/users/login`
        , {headers:headers, withCredentials:true}
        )
            .pipe(map(user => {
               
                if (user ) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log("user is " + JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}