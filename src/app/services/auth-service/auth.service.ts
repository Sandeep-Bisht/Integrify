import { Injectable } from '@angular/core';
const queryString = require('query-string');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isSecretKeyValid = () => {
    if (window.location.origin === 'https://medicrates.com') {
      return true;
    } else {
      if (localStorage.getItem('key') === 'medicratesSecretKey') {
        return true;
      }else {
        if (window.location.search) {
          const parsed = queryString.parse(window.location.search);
          localStorage.setItem('key', parsed.key);
          if (parsed.key === 'medicratesSecretKey') {
            return true;
          }
        } else {
          return false;
        }
      }
    }
}
}
