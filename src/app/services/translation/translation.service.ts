import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private language: BehaviorSubject<any> = new BehaviorSubject<any>(
    'en'
  );

  // languageValue = this.language.asObservable();
  constructor() {
    if (window.location.origin === 'https://medicrates.de') {
      if (localStorage.getItem('language') !== null) {
        this.setValue(localStorage.getItem('language'));
      } else {
        this.setValue('de');
      }
    } else {
      if (localStorage.getItem('language') !== null) {
        this.setValue(localStorage.getItem('language'));
      } else {
        this.setValue('en');
      }
    }
  }

  setValue = (data) => {
    localStorage.setItem('language', data);
    this.language.next(data);
  }

  getLangValue = () => {
    return this.language;
  }
}
