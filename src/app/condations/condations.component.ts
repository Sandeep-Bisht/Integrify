import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-condations',
  templateUrl: './condations.component.html',
  styleUrls: ['./condations.component.scss']
})
export class CondationsComponent implements OnInit {
  conditionContent: any;
  constructor(private readonly contentsService: ContentService) { }

  ngOnInit(): void {
    this.contentsService.getPage('termsandcondition').subscribe(res => {
      this.conditionContent = res.data;
    });
  }

}
