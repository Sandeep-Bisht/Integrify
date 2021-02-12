import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeContent: any ;
  constructor(private readonly contentsService: ContentService) { }

  ngOnInit(): void {
    this.contentsService.getPage('homepage').subscribe(res => {
      this.homeContent = res.data;
    });
  }
}
