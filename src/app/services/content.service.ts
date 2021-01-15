import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
        return this.httpClient.get<any>(url)
            .pipe(map(payload => {
                const { items } = payload;

                if (items.length === 0) {
                    return null;
                }

                return items[0];
            })
        );
    }
}
