import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  imprintContent: any;
  lang = 'en';
  constructor(private readonly contentsService: ContentService, public translation: TranslationService) { }

  ngOnInit(): void {
    this.getImprintPage();
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
      this.getImprintPage();
    });
  }

  getImprintPage = () => {
    this.contentsService.getPage('imprint').subscribe(res => {
      this.imprintContent = res.data;
    });
  }

}
