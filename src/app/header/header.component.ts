import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang = 'en';
  constructor(public translation: TranslationService) { }

  ngOnInit(): void {
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
    });
  }

  setLang = (item) => {
    this.lang = item;
    this.translation.setValue(item);
  }

}
