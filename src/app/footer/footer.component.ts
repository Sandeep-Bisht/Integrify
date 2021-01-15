import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // tslint:disable-next-line:typedef
    $(document).ready(function(){

      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
              $('#scrollToTop').fadeIn();
          } else {
              $('#scrollToTop').fadeOut();
          }
      });

      // tslint:disable-next-line:typedef
      $('#scrollToTop').click(function(){
          $('html, body').animate({scrollTop : 0}, 800);
          return false;
      });
  });

  }

}
