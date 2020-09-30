import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Encounter } from '../../interfaces/encounter';

@Injectable({ providedIn: 'root' })
export class EncounterService {
    private encounterUrl = 'api/encounters';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) { }

    getEncounters(): Observable<Encounter[]> {
        return this.http.get<Encounter[]>(this.encounterUrl);
    }
}
