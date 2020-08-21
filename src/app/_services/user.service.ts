import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../_models';


@Injectable()
export class UserService {
    api = 'https://5e7f9bd27a92ed0016560818.mockapi.io/product';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(`${this.api}/users/all`);
    }

    // getByEmailId(id: number) {
    //     return this.http.get(`${environment.apiUrl}/users/` + id);
    // }

    register(user: Product) {
      
       
        return this.http.post(`${this.api}/users/register/`, user);
    }

    update(user: Product) {
        return this.http.put(`${this.api}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.api}/users/` + id);
    }
}