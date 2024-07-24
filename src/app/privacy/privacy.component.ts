import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  lang = 'en';
  privacyContent: any;
  constructor() { }

  ngOnInit(): void {
    // this.getPrivacyContent();
  
  }

  // getPrivacyContent = () =>  {
  //   this.contentsService.getPage('privacy').subscribe(res => {
  //     this.privacyContent = res.data;
  //   });
  // }

}
