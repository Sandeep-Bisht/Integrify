import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeContent: any ;
  lang = 'en';
  constructor(private readonly contentsService: ContentService, public translation: TranslationService) { }

  ngOnInit(): void {
    // this.getHomeContent();
    // this.translation.getLangValue().subscribe(item => {
    //   this.lang = item;
    //   this.getHomeContent();
    // });
  }

  // getHomeContent = () => {
  //   this.contentsService.getPage('homepage').subscribe(res => {
  //     this.homeContent = res.data;
  //   });
  // }
}
