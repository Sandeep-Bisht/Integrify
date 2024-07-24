import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Config } from './config';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly config: Config
    ) {
    }


}
