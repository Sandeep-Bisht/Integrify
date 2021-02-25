import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  lang = 'en';
  privacyContent: any;
  constructor(private readonly contentsService: ContentService, public translation: TranslationService) { }

  ngOnInit(): void {
    this.getPrivacyContent();
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
      this.getPrivacyContent();
    });
  }

  getPrivacyContent = () =>  {
    this.contentsService.getPage('privacy').subscribe(res => {
      this.privacyContent = res.data;
    });
  }

}
