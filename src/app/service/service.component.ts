import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  lang = 'en';
  serviceList = [];
  serviceName='';
  constructor( 
    public router: Router, ) { }

  ngOnInit(): void {
    // this.router.navigate(['/service/address-verification']);
   
  


  }

  // getServiceList = () => {
  //   this.contentsService.getmultipleData('services').subscribe(res => {
  //     this.serviceList = res.posts;
  //   });
  // }

  public getName = () => {
    if (this.router.url === '/service/address-verification') {
      this.serviceName = 'Address Verification';
      return 'Address Verification';
    }
    if (this.router.url === '/service/bankruptcy-verification') {
      this.serviceName = 'Address Verification';
      return 'Bankruptcy Verification';
    }
    if (this.router.url === '/service/credit-verification') {
      this.serviceName = 'Credit Verification';
      return 'Credit Verification';
    }
    if (this.router.url === '/service/civil-verification') {
      this.serviceName = 'Civil Verification';
      return 'Civil Verification';
    }
    if (this.router.url === '/service/criminal-verification') {
      this.serviceName = 'Criminal Verification';
      return 'Criminal Verification';
    }

    if (this.router.url === '/service/court-records') {
      this.serviceName = 'Court Verification';
      return 'Court Records';
    }
    if (this.router.url === '/service/directorship-verification') {
      this.serviceName = 'Directorship Verification';
      return 'Directorship Verification';
    }
    if (this.router.url === '/service/education-verification') {
      this.serviceName = 'Education Verification';
      return 'Education Verification';
    }
    if (this.router.url === '/service/employment-verification') {
      this.serviceName = 'Employment Verification';
      return 'Employment Verification';
    }
    if (this.router.url === '/service/id-verification') {
      this.serviceName = 'Id Verification';
      return 'Id Verification';
    }

    if (this.router.url === '/service/reference-verification') {
      this.serviceName = 'Reference Verification';
      return 'Reference Verification';
    }
  
  }

}
