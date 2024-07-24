import { Injectable } from '@angular/core';
const queryString = require('query-string');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isSecretKeyValid = () => {
    return true;
}
}
