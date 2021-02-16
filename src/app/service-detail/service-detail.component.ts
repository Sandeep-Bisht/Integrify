import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  url = '';
  serviceDetail: any;
  constructor(public activateRoute: ActivatedRoute, private readonly contentsService: ContentService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(item => {
      if (item.id && item.id !== '') {
        this.url = item.id;
        this.serviceDetailContent();
      }
    });
  }

  serviceDetailContent = () => {
    this.contentsService.getDetailPage('services', this.url).subscribe(res => {
      this.serviceDetail = res.data.data;
      console.log(res);
      // this.serviceList = res.posts;
    });
  }

}