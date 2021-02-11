import { Component, OnInit } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { ContentService } from '../services/content.service';
import { finalize, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeContent: any ;
  serviceContent = [];
  ghostSolutionList = [];
  howItWorksContent = [];
  faqContent = [];
  loading = false;
  constructor(private readonly contentsService: ContentService) { }

  ngOnInit(): void {
    this.contentsService.getPage('homepage').subscribe(res => {
      this.loading = true;
      this.homeContent = res.data;
    });
  }
}
