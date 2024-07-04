import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  priceContent: any ;
  loading = true;
  lang = 'en';
  constructor(private readonly contentsService: ContentService, public translation: TranslationService) { }

  ngOnInit(): void {
    // this.getPriceContent();
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
      // this.getPriceContent();
    });
  }

  // getPriceContent = () => {
  //   this.contentsService.getPage('price').subscribe(res => {
  //     this.priceContent = res.data;
  //   });
  // }

}
