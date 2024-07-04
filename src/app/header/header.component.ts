import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  constructor() { }
  bgTransparent = true;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
      if(window.scrollY > 10) {
        this.bgTransparent = false
      } else {
        this.bgTransparent = true
      }
  }
  desktopView = false;
  ngOnInit(): void {
  }
}
