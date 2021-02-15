import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serviceList = [];
  constructor(private readonly contentsService: ContentService, public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/service/plagiarism-check']);
    this.contentsService.getmultipleData('services').subscribe(res => {
      this.serviceList = res.posts;
    });
  }

  public getName = () => {
    if (this.router.url === '/service/translation-of-service') {
      return 'Translation Of Service';
    }
    if (this.router.url === '/service/plagiarism-check') {
      return 'Plagiarism Check';
    }
    if (this.router.url === '/service/proofreading-of-service') {
      return 'Proofreading of Service';
    }
    if (this.router.url === '/service/editing-of-service') {
      return 'Editing Of Service';
    }
  }

}
