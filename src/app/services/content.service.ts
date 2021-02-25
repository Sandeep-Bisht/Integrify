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

    public getPage(slug: string): Observable<any> {
        const url = this.config.buildUrl(`api/content/{app}/${slug}`);
        let requestHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.set('X-Languages', localStorage.getItem('language'));
        requestHeaders = requestHeaders.set(
        'X-Flatten',
        'true'
        );
        return this.httpClient.get<any>(url, {
            headers: requestHeaders
        })
            .pipe(map(payload => {
                const { items } = payload;
                if (items.length === 0) {
                    return null;
                }
                return items[0];
            })
            );
    }

    public getmultipleData(slug): Observable<any> {
        const url = this.config.buildUrl(`api/content/{app}/${slug}`);
        let requestHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.set('X-Languages', localStorage.getItem('language'));
        requestHeaders = requestHeaders.set(
        'X-Flatten',
        'true'
        );
        return this.httpClient.get<any>(url, {
            headers: requestHeaders
        })
            .pipe(map(payload => {
                const { total, items } = payload;

                return { total, posts: items};
            })
        );
    }

    public getDetailPage(slug, filterId): Observable<any> {
        const url = this.config.buildUrl(`api/content/{app}/${slug}`);
        let requestHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.set('X-Languages', localStorage.getItem('language'));
        requestHeaders = requestHeaders.set(
        'X-Flatten',
        'true'
        );
        return this.httpClient.get<any>(url, {
            headers: requestHeaders
        })
            .pipe(map(payload => {
                const { total, items } = payload;
                const data = items.find(x => x.data.slug === filterId);
                return { total, posts: items, data};
            })
        );
    }

    public sendRequest(slug: string, param): Observable<any> {
        const url = this.config.buildUrl(`api/content/{app}/${slug}`);
        let requestHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.set(
            'content-type',
            'application/json'
        );
        // requestHeaders = requestHeaders.set('authorization', `${l()}`);
        return this.httpClient.post(url, param, {
            responseType: 'json',
            headers: requestHeaders
        })
            .pipe(catchError(this.handleError));
    }

    public uploadDocument(slug: string, param): Observable<any> {
        const url = this.config.buildUrl(`api/apps/{app}/${slug}`);
        return this.httpClient.post(url, param)
            .pipe(catchError(this.handleError));
    }

    public deleteDocument(slug: string): Observable<any> {
        const url = this.config.buildUrl(`api/apps/{app}/${slug}`);
        return this.httpClient.delete(url)
            .pipe(catchError(this.handleError));
    }

    // tslint:disable-next-line:typedef
    public handleError(error) {
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            console.log(error);
            errorMessage = error.error;
        } else {
            errorMessage = error.error;

        }
        console.log(error.error);
        return throwError(errorMessage);
    }
}
