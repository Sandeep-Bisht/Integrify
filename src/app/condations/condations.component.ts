import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-condations',
  templateUrl: './condations.component.html',
  styleUrls: ['./condations.component.scss']
})
export class CondationsComponent implements OnInit {
  conditionContent: any;
  lang = 'en';
  constructor(private readonly contentsService: ContentService, public translation: TranslationService) { }

  ngOnInit(): void {
    this.getConditions();
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
      this.getConditions();
    });
  }

  getConditions = () => {
    this.contentsService.getPage('termsandcondition').subscribe(res => {
      this.conditionContent = res.data;
    });
  }

}
