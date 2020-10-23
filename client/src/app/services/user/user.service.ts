import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { User } from '../../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User = {
        _id: null,
        email: null,
        password: null
    };

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) {}

    getUser(): void {
        this.http.get<User>('api/auth/checkAuth')
            .pipe(
                tap(userData => this.user = userData)
            );
    }
}
