import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  priceContent: any ;
  loading = true;
  lang = 'en';
  constructor() { }

  ngOnInit(): void {
    // this.getPriceContent();
  
  }

  // getPriceContent = () => {
  //   this.contentsService.getPage('price').subscribe(res => {
  //     this.priceContent = res.data;
  //   });
  // }

}
