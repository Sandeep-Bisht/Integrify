import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  url = '';
  serviceDetail: any;
  constructor() { }

  ngOnInit(): void {
   
  }

 

}
