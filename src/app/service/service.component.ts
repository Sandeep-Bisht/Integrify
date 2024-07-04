import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../services/content.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  lang = 'en';
  serviceList = [];
  constructor(private readonly contentsService: ContentService, public router: Router, public translation: TranslationService) { }

  ngOnInit(): void {
    this.router.navigate(['/service/global-database']);
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
      this.getServiceList();
    });
  }

  getServiceList = () => {
    this.contentsService.getmultipleData('services').subscribe(res => {
      this.serviceList = res.posts;
    });
  }

  public getName = () => {
    if (this.router.url === '/service/id-verification') {
      return 'Id Verification';
    }
    if (this.router.url === '/service/global-database') {
      return 'Global Database';
    }
    if (this.router.url === '/service/background-checks') {
      return 'Background Checks';
    }
    if (this.router.url === '/service/editing-of-service') {
      return 'Editing Of Service';
    }
  }

}
