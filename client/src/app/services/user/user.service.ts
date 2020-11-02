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

    getUser(): void {
        this.checkAuth().subscribe(user => {
            user.user ? this.user = user.user : this.user = {
                _id: null,
                email: null,
                password: null
            }
            console.log("hi");
        });
    }


    logInRegister(currentUser: User): Observable<any> {
        return this.http.post<any>(`${this.authURL}/loginRegister`, currentUser)
            .pipe(
                tap(res => {
                    console.log(res.success);
                    this.getUser();
                }),
                catchError(this.handleError<User>('logInRegister'))
            );
    }

    logOut(): Observable<any> {
        console.log("Logging Out");
        return this.http.get<any>(`${this.authURL}/logout`)
            .pipe(
                tap(res => {
                    console.log(res.success);
                    this.getUser();
                }),
                catchError(this.handleError<User>('logOut'))
            );
    }

    checkAuth(): Observable<any> {
        return this.http.get<any>(`${this.authURL}/checkAuth`)
            .pipe(
                tap(_ => console.log('User Retrieved')),
                catchError(this.handleError<User>('getUser'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }
}
