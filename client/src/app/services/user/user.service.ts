import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { User } from '../../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User = {
        _id: null,
        email: null,
        password: null
    };

    private authURL = 'api/auth';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) {}

    getUser(): Observable<User> {
        return this.http.get<User>(`${this.authURL}/checkAuth`)
            .pipe(
                tap(userData => this.user = userData),
                catchError(this.handleError<User>('getUser'))
            );
    }

    logInRegister(user: User): Observable<User> {
        // console.log(user);
        // return this.http.post<User>('api/auth/registerLogin', user, this.httpOptions).pipe(
        //     tap((newUser: User) => console.log(`Added User ${newUser._id}`)),
        //     catchError(this.handleError<User>('logInRegister'))
        // );
        return this.http.post<User>(`${this.authURL}/login`, user);
        // return this.http.get<User>('api/auth/checkAuth')
        //     .pipe(
        //         tap(userData => console.log(userData)),
        //         catchError(this.handleError<User>('logInRegister'))
        //     );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }
}
