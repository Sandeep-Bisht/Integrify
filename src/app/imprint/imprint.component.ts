import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  imprintContent: any;
  lang = 'en';
  constructor() { }

  ngOnInit(): void {
    // this.getImprintPage();
   
  }

  // getImprintPage = () => {
  //   this.contentsService.getPage('imprint').subscribe(res => {
  //     this.imprintContent = res.data;
  //   });
  // }

}
