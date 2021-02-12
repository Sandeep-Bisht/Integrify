import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    constructor(
        public readonly url: string,
        public readonly appName: string,
        public readonly clientId: string,
        public readonly clientSecret: string
    ) {
    }

    // tslint:disable-next-line:typedef
    public buildUrl(url: string) {
        if (url.length > 0 && url.startsWith('/')) {
            url = url.substr(1);
        }

        const result = `${this.url}/${url}`.replace('{app}', this.appName);
        console.log(result);
        return result;
    }
}

export const DefaultConfig = new Config(
    'https://squidex.it-blue.net',
    'medicrates',
    'medicrates:default',
    'xzppaoys080oor2vcyachz1nvqvsmzn5pflh9lirbagx'
);
