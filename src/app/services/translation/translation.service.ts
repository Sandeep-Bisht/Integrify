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
    console.log("inisde translation file")
  }


}
